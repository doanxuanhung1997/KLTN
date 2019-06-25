import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service-server/account.service';
import { Account } from '../model-server/account-model';
import * as $ from 'jquery';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  Items: any;
  account = new Account();
  constructor(
    public account_service: AccountService,
    public Token: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkToken();

    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        $('#myTable tr').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

  }

  getData() {
    this.account_service.getListAccount().subscribe(data => {
      this.Items = data;
    })
  }

  deleteAccount(id) {
    this.account.id_account = id;
    this.account_service.deleteAccount(this.account).subscribe(() => {
      console.log('Delete Success !!!');
      this.getData();
    }, err => {
      console.log('Error Delete');
    });
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.getData();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
