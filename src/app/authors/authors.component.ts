import {Component, OnInit} from '@angular/core';
import {DocumentCollection} from 'ngx-jsonapi';
import {Author, AuthorsService} from '../authors.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent implements OnInit {

  public authors: DocumentCollection<Author>;

  public constructor(private route: ActivatedRoute, private authorsService: AuthorsService) {
    route.queryParams.subscribe(({ page }) => {
      authorsService
          .all({
              //sort: ['name'],
              page: {number: page || 1 }
          })
          .subscribe(
              authors => {
                  this.authors = authors;
              },
              error => console.error('Could not load authors :(', error)
          );
    });
  }

  ngOnInit(): void {
    this.authorsService
      .all({
      // include: ['books', 'photos'],
    })
      .subscribe(authors => {
        //console.log(JSON.stringify(authors));
        this.authors = authors;
      });
  }

}
