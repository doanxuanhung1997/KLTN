import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewsPhone } from '../Models/ReviewsPhone';
@Injectable({
  providedIn: 'root'
})
export class ReviewsPhoneService {
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

  getListReviewsProducts(id): Observable<ReviewsPhone[]> {
    const newr = {
      tp_id: id
    };
    return this.http.post<ReviewsPhone[]>(this.server + 'getListReviewsProducts', newr);
  }

  addReviewPhone(tp_id, fullname, gmail, content, count_stars): Observable<ReviewsPhone> {
    const newRev = {
      tp_id: tp_id,
      fullname: fullname,
      gmail: gmail,
      content: content,
      count_stars: count_stars
    }
    //new ReviewsPhone(tp_id,fullname,gmail,content,count_stars);
    console.log(newRev);
    return this.http.post<ReviewsPhone>(this.server + 'addReviewPhone', newRev);
  }
}
