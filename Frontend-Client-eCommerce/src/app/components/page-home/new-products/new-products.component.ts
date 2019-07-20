import { Component, OnInit } from '@angular/core';
import {TypePhoneService} from '../../../service/type-phone.service';
import { TypePhone } from 'src/app/Models/TypePhone';
@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  newtypephone:TypePhone[];
  pageActual:number=1;
  constructor(private TPService:TypePhoneService) { }

  ngOnInit() {
    this.getListNewProducts();
  }
  getListNewProducts(){
    this.TPService.getListNewProducts().subscribe((all)=>{
      this.newtypephone=all;
     console.log(this.newtypephone);
    });
  }
}


