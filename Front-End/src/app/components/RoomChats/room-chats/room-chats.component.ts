import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../_services/authentication.service';
import {User} from '../../../_models/User'; 
import {MatDialog} from "@angular/material/dialog";
import {CreateRoomComponent} from '../create-room/create-room.component'; 

@Component({
  selector: 'app-room-chats',
  templateUrl: './room-chats.component.html',
  styleUrls: ['./room-chats.component.scss']
})
export class RoomChatsComponent implements OnInit {
  currentRoomChat = null; 
  roomChats : any []; 
  user : User ; 
  constructor(private http : HttpClient,private authservice : AuthenticationService,public dialog : MatDialog) {
    this.user = this.authservice.userValue;
  }
  ngOnInit(): void {
    this.getRoomChats();
  }

  getRoomChats(){
    console.log("start")
   this.http.get<any>(`${environment.apiUrl}/RoomChats`).subscribe(data => {
     this.roomChats = data ; 
     console.log(data); 
   })
  }

  setCurrentRoom(roomchat : any):void{
    this.currentRoomChat = roomchat; 
  }

  allowtocreate(){
    let roles = this.authservice.GetRoles(); 
    if(roles.includes("PSYCHOLOGUE") || roles.includes("ADMIN")){
      return true ;
    }
    return false ; 
  }

  Create():void {
    console.log("hi")
    const dialog = this.dialog.open(CreateRoomComponent,{
      width : "50%"}); 
    dialog.afterClosed().subscribe(()=>{
      this.getRoomChats();
    })
  }

  deleteRoom(Id : number):void {
    if(confirm("vous voulez supprimer cette conversations ? ")){
      this.http.delete(`${environment.apiUrl}/RoomChats/${Id}`).subscribe(() =>{
        this.currentRoomChat = null ;  
        this.getRoomChats(); 
      });
     
    }
    
    
  }
  
}