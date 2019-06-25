import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.api + 'login', data)
  }

  logout() {
    return this.http.get(this.api + 'logout')
  }
}
