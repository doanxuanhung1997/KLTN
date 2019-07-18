import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  api = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {
  }

  getDataDashboard() {
    return this.http.get(this.api + 'getDataDashboard')
  }

  getPhoneChart() {
    return this.http.get(this.api + 'getPhoneChart')
  }

  getPhoneAvailableChart() {
    return this.http.get(this.api + 'getPhoneAvailableChart')
  }

  getPhoneSoldChart() {
    return this.http.get(this.api + 'getPhoneSoldChart')
  }

  getTotalPhoneSold(data) {
    return this.http.post(this.api + 'getTotalPhoneSold', data)
  }

  getTotalBill(data) {
    return this.http.post(this.api + 'getTotalBill', data)
  }

  getRevenue(data) {
    return this.http.post(this.api + 'getRevenue', data)
  }

  getTotalSalary() {
    return this.http.get(this.api + 'getTotalSalary')
  }
}
