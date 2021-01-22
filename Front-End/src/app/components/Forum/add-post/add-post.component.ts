import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Article from '../../../_models/Article';
import {MatDialogRef} from "@angular/material/dialog";
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ArticlesComponent} from '../articles/articles.component'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit { 
  submited = false ; 
  articleForm : FormGroup
  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ArticlesComponent>) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      titre : ['',Validators.required],
      contenue : ['',Validators.required],
    })
  }

  get article(){return this.articleForm.value}

  post(){
    this.submited= true;
    if(this.articleForm.invalid) {
      this.submited = false ; 
      return false 
    }
    console.log("start");
    console.log(this.article);
    this.http.post(`${environment.apiUrl}/Articles`,this.article).subscribe(data =>{
      this.onNoClick();
    });
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
