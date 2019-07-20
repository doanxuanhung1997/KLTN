import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhoneCompany } from '../Models/PhoneCompany';
@Injectable({
  providedIn: 'root'
})
export class PhoneCompanyService {
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
  getListCategories(): Observable<PhoneCompany[]> {
    return this.http.get<PhoneCompany[]>(this.server + 'getListCategories');
  }
  getDetailCategory(id): Observable<PhoneCompany> {
    const newpc = {
      pc_id: id,
      pc_name: "",
      pc_logo: ""
    };
    return this.http.post<PhoneCompany>(this.server + 'getDetailCategory', newpc);
  }
}
