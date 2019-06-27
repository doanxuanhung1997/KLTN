import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'app/service-server/account.service';
import { Account } from '../../model-server/account-model';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.scss']
})
export class ShowAccountComponent implements OnInit {
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
      }, err => {

      })
    });
  }
}
