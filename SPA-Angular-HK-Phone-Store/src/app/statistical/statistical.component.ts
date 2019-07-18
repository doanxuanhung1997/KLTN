import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/service-server/dashboard.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.scss']
})
export class StatisticalComponent implements OnInit {
  totalPhone: any;
  totalBill: any;
  totalRevenue: any;
  totalSalary: any;
  constructor(private Dashboard: DashboardService) { }

  ngOnInit() {
    this.getData()
  }


  getData() {
    this.Dashboard.getTotalSalary().subscribe(data => {
      this.totalSalary = data['totalSalary']
      this.totalBill = data['totalBill']
      this.totalRevenue = data['totalRevenue']
      this.totalPhone = data['totalPhone']

    })
  }

  TotalPhoneMonth(e) {
    let data_Month = {
      month: e
    }
    this.Dashboard.getTotalPhoneSold(data_Month).subscribe(data => {
      this.totalPhone = data
    })
  }

  TotalBillMonth(e) {
    let data_Month = {
      month: e
    }
    this.Dashboard.getTotalBill(data_Month).subscribe(data => {
      this.totalBill = data
    })
  }

  TotalRevenueMonth(e) {
    let data_Month = {
      month: e
    }
    this.Dashboard.getRevenue(data_Month).subscribe(data => {
      this.totalRevenue = data
    })
  }
}
