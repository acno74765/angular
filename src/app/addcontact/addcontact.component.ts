import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  contacts: any[] = []; // Array to store contacts
  inputValueFirstName: string = '';
  inputValueLastName: string = '';
  inputValueTelephone: string = '';
  inputValueMobile: string = '';
  inputValueEmail: string='';
  inputValueDob: string='';
  inputValueImage: any;
  selectedDropdownValue: string='';
  inputValueNotes: string='';
  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.inputValueImage = event.target.files[0];
      
      // Use FileReader to display the selected image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.inputValueImage = e.target.result;
      };
      reader.readAsDataURL(this.inputValueImage);
    }
  }
  onInputChange() {
    // Update temporary storage when input values change
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  onSubmit() {
    // Add the current contact to the list of contacts
    const newContact = {
      firstName: this.inputValueFirstName,
      lastName: this.inputValueLastName,
      telephone: this.inputValueTelephone,
      mobile: this.inputValueMobile,
      email: this.inputValueEmail,
      dob: this.inputValueDob,
      image: this.inputValueImage
    };
    this.contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    
    // Clear input fields after submission
    this.inputValueFirstName = '';
    this.inputValueLastName = '';
    this.inputValueTelephone = '';
    this.inputValueMobile = '';
    this.inputValueEmail='';
    this.inputValueDob='';
    
  }

  ngOnInit() {
    // Load saved contacts from local storage on component initialization
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
    }
    this.route.queryParams.subscribe(params => {
      this.inputValueFirstName = params['firstName'] || '';
      this.inputValueLastName = params['lastName'] || '';
      this.inputValueTelephone = params['telephone'] || '';
      this.inputValueMobile = params['mobile'] || '';
      this.inputValueEmail = params['email'] || '';
      this.inputValueDob = params['dob'] || '';
  });
  
}
}
