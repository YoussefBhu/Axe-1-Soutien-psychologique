import { Component, OnInit , Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Film from '../../../_models/Film';
import { environment } from '../../../../environments/environment';
import {MatDialogRef} from "@angular/material/dialog";
import {FilmsComponent} from "../films/films.component"


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  submited = false ; 
  selectedFile = null;
  film: Film = new Film();
  url : any ;
  format: any;
  test : any;

  constructor(
    private http:HttpClient,
    public dialogRef: MatDialogRef<FilmsComponent>
    ) { 
      this.film.nom = ""; 
      this.film.duration = ""; 
      this.film.description =""; 
      this.film.genre=""; 
    }

  ngOnInit(): void {
  }

  onFileUpload(event: any){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){

  }

  post(){
    this.submited = true;
    if(this.Check(this.film)){
      this.http.post(`${environment.apiUrl}/Films`,this.film).subscribe(data => {
        this.dialogRef.close(); 
      })  
    }
    else this.submited = false
       
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

Check(obj) {
    for (var key in obj) {
        if (obj[key] == "")
          return false;     
    }
    return true;
}

}
