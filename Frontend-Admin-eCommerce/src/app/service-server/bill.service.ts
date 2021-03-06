import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  api = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {
  }

  getBill() {
    return this.http.get(this.api + 'getListBill')
  }

  showBill(id) {
    return this.http.get(this.api + 'showBill/' + id)
  }

  cofirm(data) {
    return this.http.post(this.api + 'cofirm', data)
  }

  deletePhoneOrder(data) {
    return this.http.post(this.api + 'deletePhoneOrder', data)
  }
}
