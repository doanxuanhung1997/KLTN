import { Component, OnInit } from '@angular/core';
import { TokenService } from 'app/service-server/token.service';
import { NewsService } from 'app/service-server/news.service';
import { NgForm } from '@angular/forms';
import { News } from 'app/model-server/new-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  imgAvatar = '';
  user: any;
  news = new News();
  constructor(
    private Token: TokenService,
    private NewService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserToken()
  }

  getUserToken() {
    this.user = this.Token.getUser();
  }

  createNews(form: NgForm) {
    this.news.title = form.value.title;
    this.news.content = form.value.content;
    this.news.creator = this.user.id_account;
    this.news.image = this.imgAvatar;
    this.NewService.addNews(this.news).subscribe(data => {
      form.reset();
      alert('Tạo thành công')
      this.router.navigate(['/news']);
    }, err => {

    })
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
    this.imgAvatar = 'data:image/jpeg;base64,' + btoa(binaryString);
  }

}
