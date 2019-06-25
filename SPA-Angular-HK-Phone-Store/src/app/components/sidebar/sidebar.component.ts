import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service-server/users.service';
import { TokenService } from 'app/service-server/token.service';

// declare const $: any;
// declare interface RouteInfo {
//   path: string;
//   title: string;
//   icon: string;
//   class: string;
// }
// export const ROUTES: RouteInfo[] = [
//   { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
//   { path: '/account', title: 'Account', icon: 'person', class: '' },
//   { path: '/list-product', title: 'List Product', icon: 'content_paste', class: '' },
//   { path: '/product', title: 'Product', icon: 'library_books', class: '' },
//   { path: '/invoice', title: 'Invoice', icon: 'bubble_chart', class: '' },
//   { path: '/news', title: 'New', icon: 'news', class: '' },
//   { path: '/infor', title: 'Infor', icon: 'user', class: '' },
//   { path: '/logout', title: 'Logout', icon: 'logout', class: '' },
//   { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },


//   { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
//   { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
//   //{ path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
//   //{ path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
//   { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
//   { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: '' },
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  // token = null;
  constructor(
    public users_service: UsersService,
    private Token: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    this.Token.remove();
    this.router.navigate(['/login']);
    this.users_service.logout().subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }
}
