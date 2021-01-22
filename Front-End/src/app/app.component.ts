import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedin : any = false  ; 
  title = 'Axe1';
  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.user.subscribe((data)=>{
      this.loggedin = data; 
    })
}
}
