import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TypePhoneService } from '../service-server/type-phone.service';
import { TypePhone } from '../model-server/type-phone-model';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-phone',
  templateUrl: './type-phone.component.html',
  styleUrls: ['./type-phone.component.scss']
})
export class TypePhoneComponent implements OnInit {
  p: Number = 1;
  Items: any;
  tp = new TypePhone();
  constructor(
    private tp_service: TypePhoneService,
    public Token: TokenService,
    public router: Router,
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

  getlist() {
    this.tp_service.getListTypePhone().subscribe(data => {
      this.Items = data;
    })
  }

  delete(id) {
    this.tp.tp_id = id;
    this.tp_service.deleteTypePhone(this.tp).subscribe(() => {
      console.log('Delete Success !!!');
      this.getlist();
    }, err => {
      console.log('Error Delete');
    });
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.getlist();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
