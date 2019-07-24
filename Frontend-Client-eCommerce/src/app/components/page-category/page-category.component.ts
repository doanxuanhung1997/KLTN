import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypePhone } from '../../Models/TypePhone';
import { TypePhoneService } from '../../service/type-phone.service';
import { PhoneCompany } from 'src/app/Models/PhoneCompany';
import { PhoneCompanyService } from 'src/app/service/phone-company.service';
@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {
  typephones: TypePhone[];
  phonecompany: PhoneCompany;
  pageActual: number = 1;
  idCate;
  constructor(private route: ActivatedRoute, private TPService: TypePhoneService, private PCService: PhoneCompanyService) {

  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log("data.id " + data.id);
      this.idCate = data.id;
      if (!data.idSear) {
        this.TPService.getListProducts(data.id).subscribe((all) => {
          console.log(all);
          this.typephones = all;
        });
      } else {
        this.TPService.getListProductsSearch(data.id, data.idSear).subscribe((all) => {
          console.log(all);
          this.typephones = all;
        });
      }
      this.PCService.getDetailCategory(data.id).subscribe((phonecompany) => {
        console.log("phonecompany : " + phonecompany.pc_name);
        this.phonecompany = phonecompany;
      });
    });

  }

  getFormatNumber(number) {
    return (Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, '.'))
  }
}
