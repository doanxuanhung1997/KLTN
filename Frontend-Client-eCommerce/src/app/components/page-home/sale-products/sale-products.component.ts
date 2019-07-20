import { Component, OnInit } from '@angular/core';
import {TypePhoneService} from '../../../service/type-phone.service';
import { TypePhone } from 'src/app/Models/TypePhone';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent implements OnInit {
  saletypephones:TypePhone[];
  pageActual:number=1;
  constructor(private TPService:TypePhoneService) { }

  ngOnInit() {
    this.getListSaleProducts();
  }
  getListSaleProducts(){
    this.TPService.getListSaleProducts().subscribe((all)=>{
      this.saletypephones=all;
     //console.log(this.saletypephones);
    });
  }
}
