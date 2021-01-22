import { Component, Inject } from '@angular/core';
import {RoomChatsComponent} from '../room-chats/room-chats.component'
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export interface DialogData {
  message : any ; 
}

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent  {

  sujet : String = ""  ;  
  submited : boolean =false ; 

  constructor(private http : HttpClient, public dialogRef: MatDialogRef<RoomChatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  onNoClick(): void {
      this.dialogRef.close();
  }
  create(){
    console.log(this.sujet);
    if(this.sujet != ""){
      console.log("create");
      this.submited = true; 
       this.http.post(`${environment.apiUrl}/RoomChats`,{"sujet" : this.sujet}).subscribe(data => {
        this.sujet = "" ; 
        this.dialogRef.close(); 
      })  
    }
  }

}
