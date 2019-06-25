import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/service-server/token.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
  imageDefault = '';
  imgAvatar = '';
  email = '';
  fullname = '';
  phone = '';
  address = '';
  birthday = '';
  salary = '';
  userToken: any;
  constructor(
    public Token: TokenService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.userToken = this.Token.getUser();
    this.imageDefault = this.userToken.image;
    this.email = this.userToken.email;
    this.fullname = this.userToken.fullname;
    this.phone = this.userToken.phone;
    this.address = this.userToken.address;
    this.birthday = this.userToken.birthday;
    this.salary = this.userToken.salary;
  }

  reset() {
    this.getData();
  }
}
