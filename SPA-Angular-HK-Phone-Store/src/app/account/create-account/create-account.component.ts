import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service-server/account.service';
// import { TypePhoneService } from '../../service-server/type-phone.service';
import { Account } from '../../model-server/account-model';
import { NgForm } from '@angular/forms';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  account = new Account();
  roles: any;
  Items: any;
  imgAvatar: string;
  // tslint:disable-next-line: max-line-length
  imageDefault = 'data:image/png;base64,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';

  constructor(
    public account_service: AccountService,
    public Token: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.getRoles();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getRoles() {
    this.account_service.getRoles().subscribe(data => {
      this.roles = data;
    }, err => {

    })
  }

  add_account(form: NgForm) {
    this.account.email = form.value.email;
    this.account.id_role = form.value.id_role;
    this.account.password = form.value.password;
    this.account.fullname = form.value.fullname;
    this.account.birthday = form.value.birthday;
    this.account.phone = form.value.phone;
    this.account.address = form.value.address;
    this.account.salary = form.value.salary;
    this.account.image = this.imgAvatar;

    this.account_service.addAccount(this.account).subscribe(data => {
      this.imgAvatar = this.imageDefault;
      console.log(data['message']);
    }, err => {
      console.log('Error:' + err);
    })

    form.reset();
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
