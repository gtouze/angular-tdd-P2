import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { NgModule } from '@angular/core';
import { AuthorComponent } from './author/author.component';

const routes:Routes =[
  /* {path: 'authors',
   loadChildren: './authors/authors.module#AuthorsModule'},*/
   {
    path: '',
    component: AuthorsComponent
},
{
    path: 'author/:id',
    component: AuthorComponent
}
];

@NgModule({
    //declarations:[AuthorsComponent,AuthorComponent],
    imports : [RouterModule.forRoot(routes, { useHash: true })] ,
    exports : [RouterModule]
})
export class AppRoutingModule {}
