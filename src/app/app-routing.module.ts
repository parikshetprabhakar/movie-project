import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './movie-list/home/home.component';
import { TrendingMoviesComponent } from './movie-list/trending-movies/trending-movies.component';
import { PopularMoviesComponent } from './movie-list/popular-movies/popular-movies.component';
import { WatchListComponent } from './movie-list/watch-list/watch-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trending-movies', component: TrendingMoviesComponent },
  { path: 'popular-movies', component: PopularMoviesComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
