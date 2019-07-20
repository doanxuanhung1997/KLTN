import { Component, OnInit } from '@angular/core';
import {UpdateviewService} from '../../service/updateview.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total:number=0;
  countitem:number=0;
  search:string;
  constructor(private udViewService:UpdateviewService,private router:Router) { }

  ngOnInit() {
    this.getTotalCount();
    this.udViewService.getUpdateView().subscribe((data)=>{
      this.getTotalCount();
    });
    
  }
  getTotalCount(){
    this.total=0;
    this.countitem=0;
    let cart=JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<cart.length;i++){
      let item=JSON.parse(cart[i]);
      //console.log("item cart : "+item.tp_name);
      this.countitem+=item.tp_count*1;
      this.total+=item.tp_price*item.tp_count;
    }
  }
  AddSearch(e){
    e.preventDefault();
    this.router.navigateByUrl('search/'+this.search);
  }
}
