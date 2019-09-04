import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieListModule } from './movie-list/movie-list.module';

//Services
import {ApiService} from './core/api.service';
import {SharedService} from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    MovieListModule,
    RouterModule,
    NgbModule,
  ],
  providers: [ApiService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
