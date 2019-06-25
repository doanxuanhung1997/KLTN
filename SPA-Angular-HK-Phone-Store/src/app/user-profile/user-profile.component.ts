import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';

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
  constructor(private Token: TokenService,
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
}
