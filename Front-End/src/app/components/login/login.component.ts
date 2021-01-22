import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../../_services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited: boolean  = false; 
  signupForm: FormGroup ; 
  loginForm: any ;
  loading = false; 
  submitted = false;
  error= '';
  cpassword : String ; 
  constructor(

        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private datePipe: DatePipe, 
        private http : HttpClient
  ) {   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
    this.signupForm = this.formBuilder.group({
      userName : ['', Validators.required], 
      password : ['',Validators.required], 
      cpassword : ['',Validators.required], 
      email: ['',[Validators.required,Validators.email]], 
      name: ['',Validators.required],
      prenom: ['',Validators.required], 
      num: ['',[Validators.required,Validators.pattern("[0-9 ]+")]], 
      type:['',Validators.required], 
      datenaissance:['',Validators.required]
    })
  }

  get f() {return this.loginForm.controls;}
  get signup() {return this.signupForm.value}
  onSubmit(){
      this.submited = true ; 
      if(this.loginForm.invalid){
        this.submited = false ; 
        return; 
      }
      this.authenticationService.login(this.f.username.value,this.f.password.value)
      .pipe(first())
      .subscribe(
        data=>{ 
            this.router.navigate(['/Consultations'])
        },
        error => {
          this.error = error ;
          this.submited = false ; 
        });
  }

 async SubmitSignup(){
   var errorMessage =""; 
    console.log(this.signup)
    if(this.signupForm.invalid){
      this.submited = false ; 
      return 
    }
    this.submited = true; 
    this.signup.datenaissance = this.datePipe.transform(this.signup.datenaissance,'dd/MM/yyyy'); 
    if(this.signup.password == this.signup.cpassword){
      this.http.get(`${environment.apiUrl}/CheckName/${this.signup.userName}`).subscribe(
        username =>{ if(username) errorMessage = errorMessage+"Nom d'utilisateur déja utilisé \n";
          this.http.get(`${environment.apiUrl}/CheckEmail/${this.signup.email}`).subscribe(
            email =>{
              if(email) errorMessage = errorMessage+"Email déja utilisé \n";
              if(email || username){this.submited = false; alert (errorMessage)}
              else 
              this.http.post(`${environment.apiUrl}/SignUp`,this.signup).subscribe(data=>{
              this.signupForm.reset(); 
              this.submited= false ; 
              alert("votre compte est créé")
              },error =>{
                this.submited = false; 
                alert("error"); 
              })
            })
        })
    }
  }
}

