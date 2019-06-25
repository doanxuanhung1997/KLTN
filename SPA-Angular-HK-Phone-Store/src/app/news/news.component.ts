import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service-server/news.service';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  Items: any
  constructor(
    private new_service: NewsService,
    public Token: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkToken();

    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }

  getlist() {
    this.new_service.getNews().subscribe(data => {
      this.Items = data;
      // console.log(this.Items)
    })
  }

  checkToken() {
    if (this.Token.getToken()) {
      this.getlist();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
