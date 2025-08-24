import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactModel } from './contact-model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 private http = inject(HttpClient);
 private url: string = 'https://angularhttpclient-5d604-default-rtdb.firebaseio.com/contact.json';

 sendData(contactModel: ContactModel) {
  return this.http.post(this.url, contactModel).pipe(catchError(this.errorHandler))
 }

 errorHandler(error: HttpErrorResponse) {
  return throwError(()=> error.message || 'Server error!')
 }
}
