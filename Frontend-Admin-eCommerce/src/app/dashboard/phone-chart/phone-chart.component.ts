import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DashboardService } from 'app/service-server/dashboard.service';
@Component({
  selector: 'app-phone-chart',
  templateUrl: './phone-chart.component.html',
  styleUrls: ['./phone-chart.component.scss']
})
export class PhoneChartComponent implements OnInit {
  highcharts: any;
  chartOptions: any;
  constructor(
    private dashboard_service: DashboardService,
  ) { }

  ngOnInit() {
    this.dashboard_service.getPhoneChart().subscribe(data => {
      this.highcharts = Highcharts
      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Tổng số máy của cửa hàng'
        },
        xAxis: {
          categories: data['namePC']
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total phone'
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: 'bold',
              color: 'gray'
            }
          }
        },
        legend: {
          align: 'right',
          x: -30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor: 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
              color: 'white'
            }
          }
        },
        series: [{
          name: 'Còn hàng',
          data: data['PhoneAvailable']
        }, {
          name: 'Đã bán',
          data: data['PhoneSold']
        }]
      };
    })
  }
}
