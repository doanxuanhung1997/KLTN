import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-phone-chart',
  templateUrl: './phone-chart.component.html',
  styleUrls: ['./phone-chart.component.scss']
})
export class PhoneChartComponent {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Phone warehouse Chart'
    },
    xAxis: {
      categories: ['Apple', 'Samsung', 'Oppo', 'Nokia', 'ASUS']
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
      data: [78, 25, 15, 20, 18]
    }, {
      name: 'Đã bán',
      data: [52, 40, 32, 14, 23]
    }]
  };
}
