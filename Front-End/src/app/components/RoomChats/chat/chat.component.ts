import { Component, OnInit , ElementRef , AfterViewChecked , ViewChild,Input, OnChanges} from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import {MessageService} from '../../../ChatService/message.service';
import { map } from 'rxjs/operators';
import {Message} from '../../../_models/Message'
import {User} from '../../../_models/User'
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit , AfterViewChecked , OnChanges{
  @ViewChild('msgHistory') private myScrollContainer: ElementRef;
  @Input() sujet : any = null ; 
  messages : any ; 
  user : User ; 
  send: Message = new Message(); 

  constructor(private messageService : MessageService ,
     private authenticationService: AuthenticationService) {
      this.user = this.authenticationService.userValue;
      this.send.username = this.user.userName;
      this.send.fullname = this.user.prenom+" "+this.user.name; 
      this.send.type = this.user.type;
   }

  ngOnChanges(): void {
    this.messageService.Configue("roomchat",this.sujet.id); 
    this.retrieveMessages() ;
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.messageService.Configue("roomchat",this.sujet.id); 
    this.retrieveMessages() ;
    this.scrollToBottom(); 

  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
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

getDate(time : number ){
  var date = new Date(time); 
  return date.toUTCString() ;
}

}
