import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovieList: Array<any> = [];
  page = 1;
  pageSize: number = 10;
  contentLoaded: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe(val => {
      this.popularMovieList = val.results;
    });
  }

  addTowatchList(data) {
    let items  = JSON.parse(window.localStorage.getItem('movie-list'));
    items.results.push(data);
    window.localStorage.setItem('movie-list', JSON.stringify(items));
    }

}
