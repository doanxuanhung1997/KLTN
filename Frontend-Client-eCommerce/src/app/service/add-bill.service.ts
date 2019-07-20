import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemCart } from '../Models/ItemCart';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class AddBillService {
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

  // getListReviewsProducts(id):Observable<ReviewsPhone[]>{
  //   const newr={
  //     tp_id:id
  //   };
  // return this.http.post<ReviewsPhone[]>(this.server+'getListReviewsProducts',newr);
  // }

  addBill(item: ItemCart[]): Observable<number> {
    const newBill = { item: item };
    //new ReviewsPhone(tp_id,fullname,gmail,content,count_stars);
    console.log("new bill = " + newBill);
    return this.http.post<number>(this.server + 'addBill', newBill);
  }
  addCustomer(fullname: string, address: string, phone: string, gmail: string, gender: string): Observable<number> {
    const newCus = {
      fullname: fullname,
      address: address,
      phone: phone,
      gmail: gmail,
      gender: gender
    };
    console.log(newCus);
    return this.http.post<number>(this.server + 'addCustomer', newCus);
  }
}
