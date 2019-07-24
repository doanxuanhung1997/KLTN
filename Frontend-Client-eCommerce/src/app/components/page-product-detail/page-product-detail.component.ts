import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypePhone } from '../../Models/TypePhone';
import { TypePhoneService } from '../../service/type-phone.service';
import { ReviewsPhone } from 'src/app/Models/ReviewsPhone';
import { ReviewsPhoneService } from 'src/app/service/reviews-phone.service';
import { Color } from 'src/app/Models/Color';
import { Router } from '@angular/router';
import { UpdateviewService } from '../../service/updateview.service';
@Component({
  selector: 'app-page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.scss']
})
export class PageProductDetailComponent implements OnInit {
  tpphone: TypePhone;
  reviews: ReviewsPhone[] = [];
  color: Color[] = [];
  related: TypePhone[] = [];
  pageActual: number = 1;

  tp_id: BigInteger;
  count_stars: string = "5sao.jpg";
  fullname: string;
  gmail: string;
  content: string;

  option_quality: number;
  option_color: String;
  constructor(private router: Router, private route: ActivatedRoute, private TPService: TypePhoneService, private RPService: ReviewsPhoneService, private udViewService: UpdateviewService) { }

  ngOnInit() {
    this.udViewService.setUpdateView("Update page ReView");
    this.route.params.subscribe((data) => {
      // console.log("data.id"+data.id);
      this.tp_id = data.id;
      this.TPService.getDetailProduct(data.id).subscribe((tpphone) => {
        //  console.log("tpphone"+tpphone.tp_name);
        this.tpphone = tpphone;
      });
      this.TPService.getListColorProducts(data.id).subscribe((tpcolor) => {
        console.log("tpcolor" + tpcolor);
        this.color = tpcolor;
        this.option_color = this.color[0].p_color;
      });
      this.getReview(data.id);
      this.getRelatedPro(data.id);
      this.udViewService.getUpdateView().subscribe((all) => {
        this.getReview(data.id);
      });
    });
  }
  getReview(id) {
    this.RPService.getListReviewsProducts(id).subscribe((rvphone) => {
      this.reviews = rvphone;
    });
  }
  AddReview(e) {
    e.preventDefault();
    if (this.fullname.length != 0 && this.gmail.length != 0 && this.content.length != 0) {
      this.RPService.addReviewPhone(this.tp_id, this.fullname, this.gmail, this.content, this.count_stars).subscribe((data) => {
        console.log("review added" + data.r_id);
        this.fullname = "";
        this.gmail = "";
        this.content = "";
        this.count_stars = "5sao.jpg";
        this.udViewService.setUpdateView("Update page ReView");
      });
    }
  }
  AddCart(e) {
    e.preventDefault();
    const target = e.target;
    const option_color = target.querySelector('#option_color').value;
    //const option_quality=target.querySelector('#option_quality').value;
    this.option_color = option_color;
    //this.option_quality=option_quality;
    this.udViewService.setUpdateView("Update");
    this.router.navigateByUrl('cart/' + this.tp_id + '/' + this.option_color);
  }
  getRelatedPro(id) {
    this.TPService.getListRelatedProducts(id).subscribe((related) => {
      this.related = related;
    });
  }
  getFormatNumber(number) {
    return (Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, '.'))
  }
}
