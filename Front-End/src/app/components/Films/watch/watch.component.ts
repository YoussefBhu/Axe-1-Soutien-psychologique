import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  movie : any
  constructor() { 
      this.movie = history.state.data
      console.log(this.movie)
    }

  ngOnInit(): void {
  }

}
