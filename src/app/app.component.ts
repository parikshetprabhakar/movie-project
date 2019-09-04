import { Component, OnInit } from '@angular/core';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie-project';
  movieList: Object = {
    results: []
  };

  storedlist: any;

  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('movie-list').length) {
      console.log(window.localStorage.getItem('movie-list'))
    } else {
      window.localStorage.setItem('movie-list', JSON.stringify(this.movieList));
    }
  }
}
