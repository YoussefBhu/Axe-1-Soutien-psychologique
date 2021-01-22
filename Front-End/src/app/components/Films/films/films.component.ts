import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from "@angular/material/dialog";
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../_services/authentication.service';
import {AddComponent} from '../add/add.component'; 
import {AddSuggestionsComponent} from '../add-suggestions/add-suggestions.component'
import {SuggestionsComponent} from '../suggestions/suggestions.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  film :any;
  constructor(
    private http:HttpClient,
    public dialog : MatDialog,
    private authservice : AuthenticationService,
    private router :Router
    ) { }

  ngOnInit(): void {
    this.get();
    
  }

  Create():void {
    const dialog = this.dialog.open(AddComponent,{
      width : "40%", height: '60%'}); 
    dialog.afterClosed().subscribe(result => {
      this.get();
    });
  }

  Addsugg():void {
    const dialog = this.dialog.open(AddSuggestionsComponent,{
      width : "50%"}); 
    dialog.afterClosed().subscribe(result => {
      this.get();
    });
  }

  Showsugg():void {
    const dialog = this.dialog.open(SuggestionsComponent,{
      width : "50%" , height : "70%"}); 
  }

  get(){
    console.log("hello");
     this.http.get(`${environment.apiUrl}/Films`).subscribe(data => {
      this.film =data ; 
      console.log(data); 
    })
  }

  Watch(film: any){
    console.log("test")
    this.router.navigate(['/Watch'],{state: {data: film}});
  }

  Role(role : String ):boolean{
    if(this.authservice.GetRoles().includes(role))
    return true ; 
    else false 
  }

}
