import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service-server/users.service';
import { TokenService } from 'app/service-server/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  user: any;
  isAdmin = false;
  constructor(
    public users_service: UsersService,
    private Token: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.user = this.Token.getUser();
    if (this.user.id_role === 1) {
      this.isAdmin = true;
    }
  }

  logout() {
    this.Token.remove();
    this.router.navigate(['/login']);
    this.users_service.logout().subscribe(data => {
    }, err => {
      console.log(err)
    })
  }
}
