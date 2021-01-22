import {MatDialog} from "@angular/material/dialog";
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {CreateComponent} from '../create/create.component'
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../_services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {
  Consultations :any = []; 
  constructor(private http : HttpClient , 
    public dialog:MatDialog,
    private router: Router, 
    private authservice : AuthenticationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRoomChats(); 
  }
  Create():void {
    console.log("hi")
    const dialog = this.dialog.open(CreateComponent,{
      width : "50%"}); 
    dialog.afterClosed().subscribe(result => {
      this.getRoomChats();
    });
  }

  getRoomChats(){
    console.log("start")
   this.http.get<any>(`${environment.apiUrl}/Consultations`).subscribe(data => {
     this.Consultations = data ; 
     console.log(data); 
   })
  }

  returnState(state : boolean ): String{
    if(state){
      return "En cours"; 
    }
    else {
      return "Résolu"
    }
  }
  GoToConsultation(Consultation : any){
    console.log("test")
    this.router.navigate(['/Consultation'],{state: {data: Consultation}});
  }

  AllowToCreate(){
    var roles = this.authservice.GetRoles(); 
    if(roles.includes("USER")){
      return true ; 
    }
      return false ; 
  }
  Psychologue(){
    let roles = this.authservice.GetRoles(); 
    if(roles.includes("PSYCHOLOGUE")){
      return true ;
    }
    return false ; 
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      panelClass: ['snackbar']
    });
  }
}
