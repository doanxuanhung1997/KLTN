import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = 'http://127.0.0.1:8000/';
  user: any;
  constructor(
    private http: HttpClient,
    private Token: TokenService
  ) {
    this.user = this.Token.getUser();
  }

  login(data) {
    return this.http.post(this.api + 'login', data)
  }

  logout() {
    return this.http.get(this.api + 'logout')
  }

  changepass(data) {
    return this.http.post(this.api + 'changepass/' + this.user.id_account, data)
  }
}
