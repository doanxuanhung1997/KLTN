import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { PhoneCompany } from '../model-server/phone-company';

import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PhoneCompanyService {
  api = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {
  }

  addPhoneCompany(data) {
    return this.http.post(this.api + 'addPhoneCompany', data)
  }

  getPhoneCompany() {
    return this.http.get(this.api + 'getPhoneCompany')
  }

  deletePhoneCompany(id) {
    return this.http.get(this.api + 'deletePhoneCompany/' + id)
  }


}
