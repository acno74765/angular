import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  contacts: any[] = []; // Array to store contacts
  itemsPerPage: number = 5; // Number of contacts per page
  currentPage: number = 1; 

  ngOnInit() {
    // Load saved contacts from local storage
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
    }
  }
  getDisplayedContacts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.contacts.slice(startIndex, startIndex + this.itemsPerPage);
  }
  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.contacts.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
}
