import { Component, OnInit } from '@angular/core';
import {PhoneCompanyService} from '../../service/phone-company.service';
import { PhoneCompany } from 'src/app/Models/PhoneCompany';
@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {

  phonecompanies:PhoneCompany[];
  constructor(private PCService:PhoneCompanyService) { }

  ngOnInit() {
    this.getListCategories();
  }
  getListCategories(){
    this.PCService.getListCategories().subscribe((all)=>{
      this.phonecompanies=all;
     console.log(this.phonecompanies);
    });
  }

}
