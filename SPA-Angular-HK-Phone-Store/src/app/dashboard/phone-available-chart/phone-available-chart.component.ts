import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-phone-available-chart',
  templateUrl: './phone-available-chart.component.html',
  styleUrls: ['./phone-available-chart.component.scss']
})
export class PhoneAvailableChartComponent {
  highcharts = Highcharts
  chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Number of phones available'
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
      data: [{
        name: 'Apple',
        y: 78
      }, {
        name: 'SamSung',
        y: 25
      }, {
        name: 'Nokia',
        y: 20
      }, {
        name: 'Oppo',
        y: 15
      }, {
        name: 'XIAOMI',
        y: 10
      }, {
        name: 'Asus',
        y: 18
      }, {
        name: 'HTC',
        y: 8
      }, {
        name: 'Sony',
        y: 6
      }]
    }]
  };
}
