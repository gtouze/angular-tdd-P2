import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent} from './authors.component';
import { AuthorComponent } from '../author/author.component';

@NgModule({
  declarations: [AuthorComponent , AuthorsComponent],
  imports: [ 
    CommonModule
  ]
})
export class AuthorsModule { }
