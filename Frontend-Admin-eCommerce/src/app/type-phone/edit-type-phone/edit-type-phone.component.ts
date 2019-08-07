import { ActivatedRoute, Router } from '@angular/router';
import { TypePhoneService } from 'app/service-server/type-phone.service';
import { TypePhone } from '../../model-server/type-phone-model';
import { Component, OnInit } from '@angular/core';
import { PhoneCompanyService } from 'app/service-server/phone-company.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-type-phone',
  templateUrl: './edit-type-phone.component.html',
  styleUrls: ['./edit-type-phone.component.scss']
})
export class EditTypePhoneComponent implements OnInit {
  id: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  tp_img1 = '';
  tp_img2 = '';
  tp_img3 = '';
  tp_img4 = '';
  tp_img5 = '';
  listPC: any;
  tp = new TypePhone();
  constructor(
    private TypePhoneServive: TypePhoneService,
    private PCService: PhoneCompanyService,
    private route: ActivatedRoute,
    private router: Router
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

  editTypePhone(form: NgForm) {
    this.tp.tp_name = form.value.tp_name;
    this.tp.pc_id = form.value.pc_id;
    this.tp.tp_describe = form.value.tp_describe;
    this.tp.tp_price = form.value.tp_price;
    this.tp.tp_CPU = form.value.tp_CPU;
    this.tp.tp_RAM = form.value.tp_RAM;
    this.tp.tp_screen = form.value.tp_screen;
    this.tp.tp_front_camera = form.value.tp_front_camera;
    this.tp.tp_rear_camera = form.value.tp_rear_camera;
    this.tp.tp_operating_system = form.value.tp_operating_system;
    this.tp.tp_battery = form.value.tp_battery;
    this.tp.tp_memory = form.value.tp_memory;
    this.tp.tp_discount = form.value.tp_discount;
    this.tp.tp_img1 = this.img1;
    this.tp.tp_img2 = this.img2;
    this.tp.tp_img3 = this.img3;
    this.tp.tp_img4 = this.img4;
    this.tp.tp_img5 = this.img5;

    this.TypePhoneServive.editTypePhone(this.tp).subscribe(data => {
      alert('Thay đổi đã được lưu thành công')
      form.reset();
      this.getTypePhone();
    }, err => {

    })
  }

  reset() {
    this.tp_img1 = null;
    this.tp_img2 = null;
    this.tp_img3 = null;
    this.tp_img4 = null;
    this.tp_img5 = null;
    this.getTypePhone();
  }

  handleFileSelectImg1(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedImg1.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedImg1(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.img1 = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

  handleFileSelectImg2(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedImg2.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedImg2(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.img2 = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

  handleFileSelectImg3(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedImg3.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedImg3(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.img3 = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

  handleFileSelectImg4(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedImg4.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedImg4(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.img4 = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

  handleFileSelectImg5(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoadedImg5.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoadedImg5(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.img5 = 'data:image/jpeg;base64,' + btoa(binaryString);
  }
}
