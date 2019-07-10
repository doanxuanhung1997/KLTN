import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  api = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {
  }

  getPhoneChart() {
    return this.http.get(this.api + 'getPhoneChart')
  }

  getPhoneAvailableChart() {
    return this.http.get(this.api + 'getPhoneChart')
  }

  getPhoneSoldChart() {
    return this.http.get(this.api + 'getPhoneChart')
  }

}
