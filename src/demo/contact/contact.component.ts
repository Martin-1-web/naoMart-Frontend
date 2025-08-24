import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ContactModel } from '../contact-model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatSnackBarModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactModel = new ContactModel();
  
  private snackBar = inject(MatSnackBar)
  private _contactModelService = inject(ContactService);


  onSubmit(form: NgForm) {
    
    if(!this.contactModel.name || !this.contactModel.email || !this.contactModel.message) {
      console.log("Warning: can't send empty value");
      return
    }
    
    this._contactModelService.sendData(this.contactModel).subscribe({next: (data) => console.log('Success', data), 
      error: (err)=> {console.log('Error', err)}})

    if(form.valid) {
      this.snackBar.open('✅ Thank you for contacting us! We will get back to you shortly.', 
        'Close', {duration: 5000, horizontalPosition: 'center', verticalPosition: 'top'});

        form.reset();
        return;
    }
  }

}
