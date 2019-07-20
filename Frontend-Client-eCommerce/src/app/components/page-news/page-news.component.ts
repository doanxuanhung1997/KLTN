import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/Models/News';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.scss']
})
export class PageNewsComponent implements OnInit {
  listsNew:News[];
  pageActual:number=1;
  constructor(private NService:NewsService) { }

  ngOnInit() {
    this.getListPageNewPr();
  }
  getListNews(){
    this.NService.getListNews().subscribe((all)=>{
      console.log("aaaa = "+all)
      //this.listsNew=all;
    });
    
  }
  getListPageNewPr(){
    this.NService.getListNews().subscribe((all)=>{
      this.listsNew=all;
      //console.log(all);
    });
  }
}
