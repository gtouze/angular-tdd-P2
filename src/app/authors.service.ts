import { Injectable } from '@angular/core';
import {Resource, Service, DocumentCollection} from 'ngx-jsonapi';
import { Book, BooksService } from './books.service';

export class Author extends Resource {
  public attributes = {
    name: 'default name',
    date_of_birth: '',
    date_of_death: '',
    created_at: '',
    updated_at: ''
  };
  public relationships= {
    books : new DocumentCollection<Book>(),
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthorsService  extends Service<Author> {

  constructor() {
    super();
    new BooksService();
    this.register;
  }

  public resource = Author;
  public type = 'authors';
}
