import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/service-server/dashboard.service';
import { TokenService } from 'app/service-server/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataDashboard = {
    'admin': 0,
    'employees': 0,
    'totalAccount': 0,
    'totalBill': 0,
    'totalPhone': 0
  };
  constructor(
    private dashboard_service: DashboardService,
    private Token: TokenService,
    private router: Router
  ) { }
  ngOnInit() {
    this.checkToken();
  }
  checkToken() {
    if (this.Token.getToken()) {
      this.getData();
    } else {
      this.router.navigate(['/login']);
    }
  }
  getData() {
    this.dashboard_service.getDataDashboard().subscribe(data => {
      this.dataDashboard['admin'] = data['admin'];
      this.dataDashboard['employees'] = data['employees'];
      this.dataDashboard['totalAccount'] = data['totalAccount'];
      this.dataDashboard['totalBill'] = data['totalBill'];
      this.dataDashboard['totalPhone'] = data['totalPhone'];
    }, err => {
      console.log(err);
    })
  }
}
