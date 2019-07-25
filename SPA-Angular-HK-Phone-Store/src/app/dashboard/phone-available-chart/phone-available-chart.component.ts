import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DashboardService } from 'app/service-server/dashboard.service';

@Component({
  selector: 'app-phone-available-chart',
  templateUrl: './phone-available-chart.component.html',
  styleUrls: ['./phone-available-chart.component.scss']
})
export class PhoneAvailableChartComponent implements OnInit {
  highcharts: any;
  chartOptions: any;

  constructor(
    private dashboard_service: DashboardService,
  ) { }

  ngOnInit() {
    this.dashboard_service.getPhoneAvailableChart().subscribe(data => {
      this.highcharts = Highcharts
      this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Tỉ lệ máy chưa bán'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y:f}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Total',
          colorByPoint: true,
          data: data
        }]
      };
    })
  }
}
