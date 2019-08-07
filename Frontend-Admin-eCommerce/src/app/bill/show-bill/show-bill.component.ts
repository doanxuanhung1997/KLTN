import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'app/service-server/bill.service';
import { InforBill } from 'app/model-server/infororder-model';

@Component({
  selector: 'app-show-bill',
  templateUrl: './show-bill.component.html',
  styleUrls: ['./show-bill.component.scss']
})
export class ShowBillComponent implements OnInit {
  id: number;
  info_bill = new InforBill();
  list_order: any;
  isCofirmShip = '';
  isCofirmInfo = '';
  constructor(
    private route: ActivatedRoute,
    private BillService: BillService

  ) { }

  ngOnInit() {
    this.getID();
    this.getData();
  }

  getID() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    })
  }

  getData() {
    this.BillService.showBill(this.id).subscribe(data => {
      this.info_bill = data['info_bill'][0];
      this.list_order = data['list_order'];
      this.Cofirm(this.info_bill.status, this.info_bill.diliver);
    }, err => {

    })
  }

  Cofirm(x, y) {
    if (x === 0) {
      this.isCofirmInfo = 'Chưa xác nhận';
    } else {
      this.isCofirmInfo = 'Đã xác nhận';
    }

    if (y === 0) {
      this.isCofirmShip = 'Chưa giao hàng';
    } else {
      this.isCofirmShip = 'Đã giao hàng';
    }
  }

  CofirmInfoBill() {
    if (this.info_bill.status === 0) {
      this.info_bill.status = 1;
    } else {
      this.info_bill.status = 0;
    }
    this.BillService.cofirm(this.info_bill).subscribe(data => {
      this.getData();
    }, err => {

    })
  }

  CofirmShipped() {
    if (this.info_bill.diliver === 0) {
      this.info_bill.diliver = 1;
    } else {
      this.info_bill.diliver = 0;
    }
    this.BillService.cofirm(this.info_bill).subscribe(data => {
      this.getData();
    }, err => {

    })
  }

  deletePhoneOrder(p_id) {
    const data = {
      "p_id": p_id,
      "b_id": this.id
    }
    this.BillService.deletePhoneOrder(data).subscribe(data => {
      this.getData();
    }, err => {

    })
  }

  getFormatNumber(number) {
    return (Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, '.'))
  }
}
