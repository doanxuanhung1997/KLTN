import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // server:string ="http://localhost/Angular-eCommerce/public/";
  server: string = "http://127.0.0.1:8000/";
  headers: HttpHeaders = new HttpHeaders();
  options: any;
  constructor(private http: HttpClient) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('X-Requested-With', 'XMLHttpRequest');
    let options = {
      headers: headers
    }
  }
  addNewContact(name, email, phone, content): Observable<number> {
    const newCon = {
      name: name,
      email: email,
      phone: phone,
      content: content
    }
    return this.http.post<number>(this.server + 'addNewContact', newCon);
  }
}
