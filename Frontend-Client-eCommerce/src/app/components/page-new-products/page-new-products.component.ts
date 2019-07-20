import { Component, OnInit } from '@angular/core';
import { TypePhone } from 'src/app/Models/TypePhone';
import { TypePhoneService } from 'src/app/service/type-phone.service';

@Component({
  selector: 'app-page-new-products',
  templateUrl: './page-new-products.component.html',
  styleUrls: ['./page-new-products.component.scss']
})
export class PageNewProductsComponent implements OnInit {
  listsNP:TypePhone[];
  pageActual:number=1;
  constructor(private TPService: TypePhoneService) { }

  ngOnInit() {
    this.getListPageNews();
  }
  getListPageNews(){
    this.TPService.getListPageNewPr().subscribe((all)=>{
      this.listsNP=all;
      //console.log(all);
    });
  }
}
