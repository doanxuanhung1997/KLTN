import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../Models/News';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
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
  getListNews(): Observable<News[]> {
    return this.http.get<News[]>(this.server + 'getListNews');
  }
}
