import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'app/service-server/account.service';
import { Account } from '../../model-server/account-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  image = '';
  passNew = '';
  passCofirm = '';
  imgAvatar = '';
  id: number;
  account = new Account;
  constructor(
    private route: ActivatedRoute,
    private Accounts: AccountService
  ) { }

  ngOnInit() {
    this.checkToken()
  }

  checkToken() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.Accounts.getAccount(this.id).subscribe(data => {
        this.account = data['user'][0];
        this.imgAvatar = this.account.image;
      }, err => {

      })
    });
  }

  reset() {
    this.checkToken();
    this.image = '';
    this.passNew = '';
    this.passCofirm = '';
  }

  edit_account(form: NgForm) {
    this.account.fullname = form.value.fullname;
    this.account.address = form.value.address;
    this.account.phone = form.value.phone;
    this.account.birthday = form.value.birthday;
    this.account.salary = form.value.salary;
    this.account.password = form.value.passNew;
    this.account.image = this.imgAvatar;
    console.log(this.account)
    this.Accounts.editAccount(this.account).subscribe(data => {
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
