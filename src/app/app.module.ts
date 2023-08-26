import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms'; 
const appRoutes: Routes = [
  { path: 'add-contact', component: AddcontactComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'book',component: BookComponent}
  // Other routes if needed
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    [FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
