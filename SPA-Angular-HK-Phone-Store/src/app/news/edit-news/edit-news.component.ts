import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service-server/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'app/model-server/new-models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  news = new News();
  id: number;
  imgAvatar = '';
  constructor(
    private new_service: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.inforNews(this.id);
    });
  }

  inforNews(id) {
    this.new_service.showNews(id).subscribe(data => {
      this.news = data['news'][0];
      this.imgAvatar = this.news.image;
    }, err => {

    })
  }

  editNews(from: NgForm) {
    this.news.image = this.imgAvatar;
    this.news.title = from.value.title;
    this.news.content = from.value.content;

    this.new_service.updateNews(this.news).subscribe(data => {
      from.reset();
      this.router.navigate(['/news/show-news', this.news.id_news]);
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
