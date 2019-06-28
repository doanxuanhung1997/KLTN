import { Component, OnInit } from '@angular/core';
import { TypePhone } from '../../model-server/type-phone-model';
import { TypePhoneService } from 'app/service-server/type-phone.service';
import { ActivatedRoute } from '@angular/router';
import { Phone } from 'app/model-server/phone-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-type-phone',
  templateUrl: './show-type-phone.component.html',
  styleUrls: ['./show-type-phone.component.scss']
})
export class ShowTypePhoneComponent implements OnInit {
  imagePhone = '';
  p: Number = 1;
  id: number;
  listPhone: any;
  tp = new TypePhone();
  phone = new Phone();
  constructor(
    private TypePhoneServive: TypePhoneService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getID();
    this.getData();
  }

  getID() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.phone.tp_id = this.id;
    })
  }

  getData() {
    this.getTypePhone();
    this.getListPhone();
  }

  getTypePhone() {
    this.TypePhoneServive.getTypePhone(this.id).subscribe(data => {
      this.tp = data['typephone'][0];
      this.imagePhone = this.tp.tp_img1;
    }, err => {

    })
  }
  getListPhone() {
    this.TypePhoneServive.getListPhone(this.id).subscribe(data => {
      this.listPhone = data['listphone'];
    }, err => {

    })
  }

  deletePhone(id) {
    this.phone.p_id = id;
    this.TypePhoneServive.deletePhone(this.phone).subscribe(data => {
      this.getListPhone();
    }, err => {

    })
  }

  addPhone(form: NgForm) {
    if (form.value.p_color === undefined) {
      return alert('Colors are not empty')
    } else {
      this.phone.p_color = form.value.p_color;
      this.TypePhoneServive.addPhone(this.phone).subscribe(
        data => {
          this.getListPhone();
        },
        err => {

        }

      )
    }
    form.reset();
  }

  showImage(event) {
    this.imagePhone = event.target.currentSrc;
  }
}
