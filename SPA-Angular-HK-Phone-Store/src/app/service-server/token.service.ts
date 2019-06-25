import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(data) {
    this.setToken(data.access_token);
    this.setUser(data.user)
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  setUser(user) {
    // const a = {
    //   'userName': user.email
    // }
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
