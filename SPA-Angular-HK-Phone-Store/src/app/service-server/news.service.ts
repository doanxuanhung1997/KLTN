import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {
  }

  addPhoneCompany(data) {
    return this.http.post(this.api + 'addPhoneCompany', data)
  }

  getNews() {
    return this.http.get(this.api + 'getNews')
  }

  showNews(id) {
    return this.http.get(this.api + 'showNews/' + id)
  }

  deletePhoneCompany(id) {
    console.log('Delete Product id ' + id);
    return this.http.get(this.api + 'deletePhoneCompany/' + id)
  }


}
