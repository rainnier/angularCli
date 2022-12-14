import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  /* {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "book",
    component: BookComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
