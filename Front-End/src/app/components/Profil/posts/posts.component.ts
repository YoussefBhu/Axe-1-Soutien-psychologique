import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  Articles : any ; 

  constructor(
    private http : HttpClient, 
    private datePipe : DatePipe) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles (){
    this.http.get(`${environment.apiUrl}/Articles/MyArticles`).subscribe(data => {
      this.Articles =data ; 
    })
  }

  date(date : Date){
    return this.datePipe.transform(date, 'dd/MM/yyyy hh:mm')
  }

  delete(id : number){
    if(confirm("Vous voulez vraiment supprimer cet article?"))
    this.http.delete(`${environment.apiUrl}/Articles/`+id).subscribe(data=>{
      this.getArticles()
      alert("Article supprimer")
    })
  }

}
