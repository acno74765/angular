import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  contacts: any[] = [];
  searchTerm: string = ''; // Search term for filtering
  filteredContacts: any[] = [];
  constructor(private router: Router) {}
  goToEditContact(contact: any) {
    const queryParams = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      telephone: contact.telephone,
      mobile: contact.mobile,
      email: contact.email,
      dob: contact.dob,
      image: contact.image ? btoa(contact.image) : null,// Encode the image data if it exists
      editMode: false // Set the edit mode flag to true

    };

    this.router.navigate(['/add-contact'], { queryParams });
  }

  ngOnInit() {
    // Load saved contacts from local storage
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
      this.filteredContacts = this.contacts;
    }
  }
  updateFilteredContacts() {
    if (!this.searchTerm) {
      this.filteredContacts = this.contacts;
      return;
    }

    this.filteredContacts = this.contacts.filter(contact =>
      (contact.firstName + ' ' + contact.lastName).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
