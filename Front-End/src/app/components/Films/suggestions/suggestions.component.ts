import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FilmsComponent} from "../films/films.component"
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  filmSuggestion : any;
  constructor(
    private http:HttpClient,
    public dialogRef: MatDialogRef<FilmsComponent>) { }

  ngOnInit(): void {
    this.getFilmSuggestion();
  }

  getFilmSuggestion(){
    this.http.get(`${environment.apiUrl}/Films/Suggestions`).subscribe(data => {
      this.filmSuggestion =data ; 
      console.log(data); 
    })
}
}
