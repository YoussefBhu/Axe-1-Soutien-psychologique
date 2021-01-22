import { Component, OnInit, ViewChild , ElementRef , AfterViewChecked } from '@angular/core';
import {MessageService} from '../../../ChatService/message.service'
import { map } from 'rxjs/operators';
import {Message} from '../../../_models/Message'
import {User} from '../../../_models/User'
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit , AfterViewChecked {
  @ViewChild('msgHistory') private myScrollContainer: ElementRef;
  messages : any ; 
  user : User ; 
  send: Message = new Message(); 
  Consultation : any  = null;
  constructor(private messageService : MessageService , 
    private authenticationService: AuthenticationService,
    private dataRoute: ActivatedRoute, 
    private router: Router,
    private http: HttpClient) { 
    this.user = authenticationService.userValue; 
    this.send.username = this.user.userName;
    this.Consultation = history.state.data; 
  //  this.Consultation = JSON.parse(this.dataRoute.snapshot.params['objectProducts']);
    console.log(this.Consultation); 
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  ngOnInit(): void {
    if(this.Consultation){
      this.messageService.Configue("consultation",this.Consultation.id); 
      this.retrieveMessages() 
      this.scrollToBottom(); 
    }
    else {
      this.router.navigate(['Consultations'])
    }
  }

  retrieveMessages(): void {
    this.messageService.getAll().snapshotChanges().pipe(map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.messages = data;
      console.log(data)
    });
  }

  sendMessage() {
    if(this.send.message != null){
    console.log("hello")
    var date = new Date(); 
    this.send.date = date.getTime(); 
    this.messageService.create(this.send); 
    this.send.message = null;
    }
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}

  getDate(time : number ){
    var date = new Date(time); 
    return date.toUTCString() ;
  }
  Psychologue(){
    let roles = this.authenticationService.GetRoles(); 
    if(roles.includes("PSYCHOLOGUE")){
      return true ;
    }
    return false ; 
  }

  Confirme(){
    if(confirm("vous voulez fermer cette consultation? ")){
      this.Consultation.active = false ; 
      this.http.put(`${environment.apiUrl}/Consultations`,this.Consultation).subscribe(data=> {
      this.router.navigate(['/Consultations'])
    })
    }
    
  }

}