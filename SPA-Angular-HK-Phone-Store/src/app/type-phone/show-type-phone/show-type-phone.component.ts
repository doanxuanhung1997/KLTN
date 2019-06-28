import { Component, OnInit } from '@angular/core';
import { TypePhone } from '../../model-server/type-phone-model';
import { TypePhoneService } from 'app/service-server/type-phone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-type-phone',
  templateUrl: './show-type-phone.component.html',
  styleUrls: ['./show-type-phone.component.scss']
})
export class ShowTypePhoneComponent implements OnInit {
  p: Number = 1;
  id: number;
  listPhone: any;
  tp = new TypePhone();
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
    })
  }

  getData() {
    this.TypePhoneServive.getTypePhone(this.id).subscribe(data => {
      this.tp = data['typephone'][0];
    }, err => {

    })

    this.TypePhoneServive.getListPhone(this.id).subscribe(data => {
      this.listPhone = data['listphone'];
    }, err => {

    })
  }
}
