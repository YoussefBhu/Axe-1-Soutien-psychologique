import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Message} from '../_models/Message'; 

@Injectable({
  providedIn: 'root'
})

export class MessageService { 
  MessageRef: AngularFireList<Message> = null;
  constructor(private db: AngularFireDatabase) { 
  }

  Configue(ServiceName : String , ChatId : String ):void{
    this.MessageRef = this.db.list("/"+ServiceName+"/"+ChatId)
    console.log("done!!!");
  }
  getAll(): AngularFireList<Message> {
    return this.MessageRef;
  }

  create(message: Message): any {
    return this.MessageRef.push(message);
  }

  update(key: string, value: any): Promise<void> {
    return this.MessageRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.MessageRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.MessageRef.remove();
  }
  
}
