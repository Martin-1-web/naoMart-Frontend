import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from './contact';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);
  private url: string = 'https://angularhttpclient-5d604-default-rtdb.firebaseio.com/naoMartContact.json';

  sendContactInfo(contact: Contact) {
   return this.http.post(this.url, contact).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || 'Server Error');
  }

}
