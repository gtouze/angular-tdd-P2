import { Component, OnInit } from '@angular/core';
import { Resource } from 'ngx-jsonapi';
import { ActivatedRoute } from '@angular/router';
import { Author, AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
})

export class AuthorComponent implements OnInit {
  
  public author: Author;

   public constructor(private authorsService:AuthorsService,private route:ActivatedRoute)
   {
  }


  ngOnInit() {
    this.route.params.subscribe(({ id })=> {
        this.authorsService.get(id,{include: ['books']})
        .subscribe(
            (author: Author) => {
                this.author=author;
                console.log(this.author);
            },
            error => console.error('Could nod load author.',error)
        );
    })
  }

}
