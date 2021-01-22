import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import {User} from '../../../_models/User'


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  user : User = null; 
  constructor(private authService : AuthenticationService) {
    this.user = authService.userValue; 
   }

  ngOnInit(): void {
  }

}
