import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: 'book', component: BookComponent},
  { path: 'add-contact', component: AddcontactComponent},
  {path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
