import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ContactModel } from '../contact-model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactModel = new ContactModel();
 constructor(private snackBar: MatSnackBar) {}

   onSubmit(form: NgForm) {
   
    if(form.valid) {
      this.snackBar.open('✅ Thank you for contacting us! We will get back to you soon.',
        'Close', {duration: 4000, horizontalPosition: 'center', verticalPosition: 'top'}
      );
      console.log(form.value);
      form.reset();
    }
  }
}
