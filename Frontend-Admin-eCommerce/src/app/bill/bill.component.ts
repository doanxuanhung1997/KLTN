import { Component, OnInit } from '@angular/core';
import { BillService } from '../service-server/bill.service';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  p: Number = 1;
  Items: any;
  constructor(
    private bill_service: BillService,
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
    this.bill_service.getBill().subscribe(data => {
      this.Items = data;
    }, err => {
      console.log(err)
    })
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.getData();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getFormatNumber(number) {
    return (Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, '.'))
  }
}
