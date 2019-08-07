import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/service-server/token.service';
import { NgForm } from '@angular/forms';
import { UsersService } from 'app/service-server/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
  imgAvatar: any;
  image = '';
  userToken: any;
  constructor(
    public Token: TokenService,
    private User: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.userToken = this.Token.getUser();
    this.imgAvatar = this.userToken.image;
  }

  reset() {
    this.getData();
    this.image = null;
  }

  edit_profile(form: NgForm) {
    this.userToken.fullname = form.value.fullname;
    this.userToken.address = form.value.address;
    this.userToken.phone = form.value.phone;
    this.userToken.birthday = form.value.birthday;
    this.userToken.salary = form.value.salary;
    if (this.imgAvatar !== undefined) {
      this.userToken.image = this.imgAvatar;
    }
    this.User.edit_profile(this.userToken).subscribe(data => {
      this.Token.setUser(data['user'])
      alert('Thay đổi đã được lưu thành công')
      this.reset()
    }, err => {

    })
    // this.router.navigate(['/user-profile']);
  }

  handleFileSelectImgAvarta(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.imgAvatar = 'data:image/jpeg;base64,' + btoa(binaryString);
  }
}
