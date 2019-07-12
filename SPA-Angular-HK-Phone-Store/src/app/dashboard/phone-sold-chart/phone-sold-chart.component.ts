import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-phone-sold-chart',
  templateUrl: './phone-sold-chart.component.html',
  styleUrls: ['./phone-sold-chart.component.scss']
})
export class PhoneSoldChartComponent {

  highcharts = Highcharts
  chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Number of phones sold'
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
        y: 52
      }, {
        name: 'SamSung',
        y: 40
      }, {
        name: 'Nokia',
        y: 14
      }, {
        name: 'Oppo',
        y: 32
      }, {
        name: 'XIAOMI',
        y: 25
      }, {
        name: 'Asus',
        y: 23
      }, {
        name: 'HTC',
        y: 10
      }, {
        name: 'Sony',
        y: 3
      }]
    }]
  };
}
