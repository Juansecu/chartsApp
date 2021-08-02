import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
  ]
})
export class BarsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      backgroundColor: '#1F54FF',
      data: [65, 59, 80, 81, 56, 55, 40],
      hoverBackgroundColor: '#25B3F5',
      label: 'Series A'
    },
    {
      backgroundColor: '#DE9C16',
      data: [28, 48, 40, 19, 86, 27, 90],
      hoverBackgroundColor: '#FFE41E',
      label: 'Series B'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  public randomize(): void {
    this.barChartData.map(chartDataSet => chartDataSet.data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ]);
    /*this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100)
    ];*/
  }
}
