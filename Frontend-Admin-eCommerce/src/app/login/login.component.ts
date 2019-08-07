import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../service-server/users.service';
import { Router } from '@angular/router';
import { TokenService } from 'app/service-server/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error: any;
  token: any;
  constructor(
    public users_service: UsersService,
    public Token: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkToken();
  }
  checkToken() {
    if (this.Token.getToken()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  login(form: NgForm) {
    this.users_service.login(form.value).subscribe(data => {
      this.handleResponse(data)
      this.router.navigate(['/dashboard']);
    }, err => {
      this.handleError(err);
    })
    form.reset();
  }

  handleResponse(data) {
    this.Token.handle(data)
  }

  handleError(err) {
    this.error = err.error.error
  }

}
