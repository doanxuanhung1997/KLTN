import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {
  }

  addNews(data) {
    return this.http.post(this.api + 'addNews', data)
  }

  getNews() {
    return this.http.get(this.api + 'getNews')
  }

  showNews(id) {
    return this.http.get(this.api + 'showNews/' + id)
  }

  deleteNews(data) {
    return this.http.post(this.api + 'deleteNews', data)
  }

  updateNews(data) {
    return this.http.post(this.api + 'updateNews', data)
  }

}
