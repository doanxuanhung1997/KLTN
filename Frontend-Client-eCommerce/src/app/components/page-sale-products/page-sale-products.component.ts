import { Component, OnInit } from '@angular/core';
import { TypePhone } from 'src/app/Models/TypePhone';
import { TypePhoneService } from 'src/app/service/type-phone.service';

@Component({
  selector: 'app-page-sale-products',
  templateUrl: './page-sale-products.component.html',
  styleUrls: ['./page-sale-products.component.scss']
})
export class PageSaleProductsComponent implements OnInit {
  listsSP:TypePhone[];
  pageActual:number=1;
  constructor(private TPService:TypePhoneService) { }

  ngOnInit() {
    this.getListPageSalePr();
  }
  getListPageSalePr(){
    this.TPService.getListPageSalePr().subscribe((all)=>{
      this.listsSP=all;
    });
  }
}
