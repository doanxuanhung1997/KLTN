import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service-server/news.service';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';
import { News } from 'app/model-server/new-models';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  p: Number = 1;
  news = new News();
  Items: any
  constructor(
    private new_service: NewsService,
    public Token: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkToken();

    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        $('#myTable tr').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }

  getlist() {
    this.new_service.getNews().subscribe(data => {
      this.Items = data['news'];
    })
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.getlist();
    } else {
      this.router.navigate(['/login']);
    }
  }

  deleteNews(id) {
    this.news.id_news = id;
    this.new_service.deleteNews(this.news).subscribe(data => {
      this.getlist();
    }, err => {

    })
  }
}
