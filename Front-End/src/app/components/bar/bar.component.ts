import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import {User} from '../../_models/User'; 
import { faShieldVirus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  Icon = faShieldVirus;
   user :User; 
  constructor(
    private authenticationService : AuthenticationService
  ) { 
    this.user = authenticationService.userValue; 
  }

  ngOnInit(): void {
  }

  logout():void{
    this.authenticationService.logout()
  }
}