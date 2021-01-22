import { Component, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FilmsComponent} from "../films/films.component"
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {filmSuggestion} from '../../../_models/filmSuggestion'

@Component({
  selector: 'app-add-suggestions',
  templateUrl: './add-suggestions.component.html',
  styleUrls: ['./add-suggestions.component.scss']
})
export class AddSuggestionsComponent {

  suggestion: filmSuggestion = new filmSuggestion; 
  submited : boolean =false ; 

  constructor(private http : HttpClient ,  public dialogRef: MatDialogRef<FilmsComponent>, private _snackBar: MatSnackBar
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(){
    console.log(this.suggestion);
    if(this.suggestion.message && this.suggestion.nomFilm){
      console.log("create");
      this.submited = true; 
       this.http.post(`${environment.apiUrl}/Films/Suggestions`,this.suggestion).subscribe(data => {
        this.suggestion = new filmSuggestion(); 
        this.openSnackBar("votre suggestion est envoyé"); 
        this.dialogRef.close(); 
      })  
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      panelClass: ['snackbar']
    });
  }
 
}
