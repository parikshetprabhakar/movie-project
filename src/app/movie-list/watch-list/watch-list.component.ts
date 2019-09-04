import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  movieList: any;
  nowatchList: boolean = true;
  watchlist: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.movieList = window.localStorage.getItem('movie-list');
    this.movieList = JSON.parse(this.movieList);
    this.watchlist = this.movieList.results;
    if(!this.watchlist.length) {
      this.nowatchList = true;
    } else {
      this.nowatchList = false;
    }
  }
}
