import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';

@NgModule({
  declarations: [HomeComponent, TrendingMoviesComponent, PopularMoviesComponent, WatchListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class MovieListModule { }
