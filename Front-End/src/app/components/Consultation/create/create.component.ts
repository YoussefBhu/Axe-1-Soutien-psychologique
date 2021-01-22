import { Component, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ConsultationsComponent} from "../consultations/consultations.component"
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DialogData {
  nom: string;
  prenom: string ; 
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  sujet : String = ""; 
  submited : boolean =false ; 

  constructor(private http : HttpClient ,  public dialogRef: MatDialogRef<ConsultationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _snackBar: MatSnackBar
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(){
    console.log(this.sujet);
    if(this.sujet != ""){
      console.log("create");
      this.submited = true; 
       this.http.post(`${environment.apiUrl}/Consultations`,this.sujet).subscribe(data => {
        this.sujet = "" ; 
        this.openSnackBar("votre consultation est créé"); 
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
