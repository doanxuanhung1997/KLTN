import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TypePhone } from '../../Models/TypePhone';
import { TypePhoneService } from '../../service/type-phone.service';
import { Router } from '@angular/router';
import { UpdateviewService } from '../../service/updateview.service';

@Component({
  selector: 'app-page-compare',
  templateUrl: './page-compare.component.html',
  styleUrls: ['./page-compare.component.scss']
})
export class PageCompareComponent implements OnInit {
  tpphone1: TypePhone;
  tpphone2: TypePhone;
  constructor(private router: Router, private route: ActivatedRoute, private TPService: TypePhoneService, private udViewService: UpdateviewService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.TPService.getDetailProduct(data.id1).subscribe((all) => {
        console.log(all);
        this.tpphone1 = all;
      });
      this.TPService.getDetailProduct(data.id2).subscribe((all) => {
        console.log(all);
        this.tpphone2 = all;
      });
    });
  }

  getFormatNumber(number) {
    return (Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, '.'))
  }
}
