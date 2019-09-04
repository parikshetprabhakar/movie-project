import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovieList: Array<any> = [];
  searchMovieList: Array<any> = [];
  popularMoviesList: Array<any> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTrendingtodayMovies().subscribe(val => {
      this.trendingMovieList = val.results;
    });

    this.apiService.getPopularMovies().subscribe(val => {
      this.popularMoviesList = val.results;
    });
  }
  searchMovie(name: string) {
    this.apiService.getSearchMovie(name).subscribe(val => {
      this.searchMovieList = val.results;
    })
  }

  addTowatchList(data) {
  let items  = JSON.parse(window.localStorage.getItem('movie-list'));
  items.results.push(data);
  window.localStorage.setItem('movie-list', JSON.stringify(items));
  }

}
