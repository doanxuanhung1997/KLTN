import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from 'app/service-server/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  passOld: String;
  passNew: String;
  passConfirm: String;
  public isChangePass = false;
  public isEditInfo = true;
  user: any;
  constructor(
    private Token: TokenService,
    private User: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.user = this.Token.getUser();
    } else {
      this.router.navigate(['/login']);
    }
  }

  ShowHide() {
    this.isChangePass = !this.isChangePass;
    this.isEditInfo = !this.isEditInfo;
    this.passOld = '';
    this.passNew = '';
    this.passConfirm = '';
  }

  changepass(form: NgForm) {
    if (form.value.passNew.length < 6 || form.value.passNew.length > 32) {
      return alert('Password lengths range from 6-32 characters !');
    } else {
      if (form.value.passNew !== form.value.passConfirm) {
        return alert('Confirm password is not the same !');
      }
      else {
        this.User.changepass(form.value).subscribe(data => {
          form.reset();
          this.isChangePass = !this.isChangePass;
          this.isEditInfo = !this.isEditInfo;
        }, err => {

        })
      }
    }
  }
}
