import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'app/service-server/news.service';
import { News } from 'app/model-server/new-models';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss']
})
export class ShowNewsComponent implements OnInit {
  id: number;
  news = new News();
  constructor(
    private NewService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getID();
    this.showNews();
  }

  getID() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    })
  }

  showNews() {
    this.NewService.showNews(this.id).subscribe(data => {
      this.news = data['news'][0];
    }, err => {

    })
  }
}
