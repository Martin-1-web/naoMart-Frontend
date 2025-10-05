import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactModel } from './contact-model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 private http = inject(HttpClient);
// private url1: string = 'https://angularhttpclient-5d604-default-rtdb.firebaseio.com/contact.json';
 private url: string = 'https://naomart-backend.onrender.com';
//private ur: string = 'http://localhost:8080'

 sendData(contact: ContactModel): Observable<ContactModel> {
  return this.http.post<ContactModel>(`${this.url}/contact-details`, contact).pipe(catchError(this.errorHandler))
 }

 errorHandler(error: HttpErrorResponse) {
  return throwError(()=> error.message || 'Server error!')
 }

  getUsers(): Observable<ContactModel[]> {
  return this.http.get<ContactModel[]>(`${this.url}/fetch-contact-details`);
 }

}
