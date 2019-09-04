import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api.service';
@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {

  trendingMovieList: Array<any> = [];
  page = 1;
  pageSize: number = 10;
  contentLoaded: boolean = false;
 
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTrendingtodayMovies().subscribe(val => {
      this.trendingMovieList = val.results;
    });
  }

  addTowatchList(data) {
    let items  = JSON.parse(window.localStorage.getItem('movie-list'));
    items.results.push(data);
    window.localStorage.setItem('movie-list', JSON.stringify(items));
  }

}
