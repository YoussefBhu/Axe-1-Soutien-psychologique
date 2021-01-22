import { Component, OnInit , Input} from '@angular/core';
import {HttpClient ,HttpHeaders } from '@angular/common/http';
import Comment from '../../../_models/Comment';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';
import { environment } from '../../../../environments/environment';
import {AddPostComponent} from '../add-post/add-post.component'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  myDate = new Date();
  constructor(
    public dialog: MatDialog,
    private http:HttpClient,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar) { }
    article: any;
    comment: Comment = new Comment();
  
  ngOnInit(): void {
    
    this.get();
  }
  
  Create():void {
    const dialog = this.dialog.open(AddPostComponent,{
      width : "50%"}); 
    dialog.afterClosed().subscribe(result => {
      this.get();
    });
  }

  get(){
   
     this.http.get(`${environment.apiUrl}/Articles`).subscribe(data => {
      this.article=data ;
      console.log(data); 
    })
  }

  postComment(id :any){
    if(this.comment.contenue!= "" && this.comment.contenue != null)
    this.http.post(`${environment.apiUrl}/Articles/`+id+`/AddComment`,this.comment).subscribe(()=>{
      this.comment.contenue= "";
      this.get()
      this.snackBar.open("Commentaire enregistrer", "", {
        duration: 3000,
        panelClass: ['snackbar']
      });
    });  
  }

  getDate(date : Date){
    return this.datePipe.transform(date,"dd/MM/yyyy hh:mm")
  }
}
