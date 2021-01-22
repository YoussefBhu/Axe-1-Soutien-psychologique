import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  profile : any ; 

  constructor(
    private auth :AuthenticationService
    ) { }

  ngOnInit(): void {
    this.profile = this.auth.userValue
  }

}
