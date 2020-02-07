import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AppRoutingModule } from './app-routing.modules';
import { AuthorsService } from './authors.service';
import { BooksService } from './books.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes, { useHash: true }),
    NgxJsonapiModule.forRoot({
      url: environment.jsonapi_url
    })
  ],
  providers: [
    AuthorsService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
