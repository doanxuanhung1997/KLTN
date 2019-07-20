import { Component, OnInit } from '@angular/core';
import { TypePhone } from 'src/app/Models/TypePhone';
import { TypePhoneService } from 'src/app/service/type-phone.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  listsNP:TypePhone[];
  pageActual:number=1;
  name:string;
  size:number;
  constructor(private route:ActivatedRoute,private TPService: TypePhoneService) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.name=data.name;
      this.TPService.getListSearchByName(data.name).subscribe((data)=>{
        this.listsNP=data;
         this.size=this.listsNP.length;
      });
    });
  }

}
