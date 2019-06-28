import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypePhoneService {
  api = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  getListTypePhone() {
    return this.http.get(this.api + 'getListTypePhone')
  }

  addTypePhone(data) {
    return this.http.post(this.api + 'addTypePhone', data)
  }

  deleteTypePhone(data) {
    return this.http.post(this.api + 'deleteTypePhone', data)
  }

  getTypePhone(id) {
    return this.http.get(this.api + 'getTypePhone/' + id)
  }

  getListPhone(id) {
    return this.http.get(this.api + 'getListPhone/' + id)
  }

  deletePhone(data) {
    return this.http.post(this.api + 'deletePhone', data)
  }

  addPhone(data) {
    return this.http.post(this.api + 'addPhone', data)
  }
}
