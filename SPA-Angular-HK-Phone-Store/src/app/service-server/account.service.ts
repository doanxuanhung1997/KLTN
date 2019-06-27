import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  api = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  getListAccount() {
    return this.http.get(this.api + 'getListAccount')
  }

  addAccount(data) {
    return this.http.post(this.api + 'addAccount', data)
  }

  deleteAccount(data) {
    return this.http.post(this.api + 'deleteAccount', data)
  }

  getAccount(id) {
    return this.http.get(this.api + 'getAccount/' + id)
  }

  editAccount(data) {
    return this.http.post(this.api + 'editAccount', data)
  }
}
