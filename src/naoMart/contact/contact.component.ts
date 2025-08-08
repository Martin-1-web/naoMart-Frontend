import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Contact } from '../../app/contact';
import { ContactService } from '../../app/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email: string = '';
  emailAddress: string = 'naomartit@gmail.com'

  errorMsg: string = '';

  contactModel = new Contact();

  _contactService = inject(ContactService);

  onSubmit() {

    this._contactService.sendContactInfo(this.contactModel).subscribe({next: (data) => {console.log('Success: ', data);}, 
    error: (err)=> console.log(this.errorMsg = err)});
  }
}
