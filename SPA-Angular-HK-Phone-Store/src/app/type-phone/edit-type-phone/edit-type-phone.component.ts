import { ActivatedRoute } from '@angular/router';
import { TypePhoneService } from 'app/service-server/type-phone.service';
import { TypePhone } from '../../model-server/type-phone-model';
// import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PhoneCompanyService } from 'app/service-server/phone-company.service';

@Component({
  selector: 'app-edit-type-phone',
  templateUrl: './edit-type-phone.component.html',
  styleUrls: ['./edit-type-phone.component.scss']
})
export class EditTypePhoneComponent implements OnInit {
  id: number;
  img1: String;
  img2: String;
  img3: String;
  img4: String;
  img5: String;
  listPC: any;
  tp = new TypePhone();
  constructor(
    private TypePhoneServive: TypePhoneService,
    private PCService: PhoneCompanyService,
    private route: ActivatedRoute
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
    this.getTypePhone();
    this.getListPC();
  }

  getTypePhone() {
    this.TypePhoneServive.getTypePhone(this.id).subscribe(data => {
      this.tp = data['typephone'][0];
      this.img1 = this.tp.tp_img1;
      this.img2 = this.tp.tp_img2;
      this.img3 = this.tp.tp_img3;
      this.img4 = this.tp.tp_img4;
      this.img5 = this.tp.tp_img5;
    }, err => {

    })
  }

  getListPC() {
    this.PCService.getPhoneCompany().subscribe(data => {
      this.listPC = data;
    }, err => {

    })
  }
}
