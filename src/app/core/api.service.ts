import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_KEY = '6bc27eec564d5ed79e99a8f2d6909c01';
  private URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
  private URL_TRENDING = 'https://api.themoviedb.org/3/trending/all';
  private URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
  private URL_MOVIE = 'https://api.themoviedb.org/3/movie';
  private URL_PERSON = 'https://api.themoviedb.org/3/person';
  private URL_GENRE = 'https://api.themoviedb.org/3/genre';
  // ?api_key=6bc27eec564d5ed79e99a8f2d6909c01

  constructor(private http: HttpClient) { }

  getSearchMovie(name: string): Observable<any> {
    return this.http.get<any>(`
    ${this.URL_SEARCH}?api_key=${this.API_KEY}&query=${name}
    `);
  };

  getTrendingtodayMovies(): Observable<any> {
    return this.http.get<any>(`
    ${this.URL_TRENDING}/day?api_key=${this.API_KEY}
    `);
  };

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(`
    ${this.URL_DISCOVER}?api_key=${this.API_KEY}&sort_by=popularity.desc
    `);
  }
}
