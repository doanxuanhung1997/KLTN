import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service-server/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  item: any;
  // private sub: any;
  id: number;
  constructor(
    private new_service: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.inforNews(this.id);
    });
  }

  inforNews(id) {
    this.new_service.showNews(id).subscribe(data => {
      this.item = data;
    })
  }
}
