import { Component, Input, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent implements OnInit {
  @Input() barChartLabels!: Label[];
  
  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartDataSets[] = [];
  
  barChartType!: ChartType;

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLegend = true;

  ngOnInit(): void {
    this.barChartType = this.horizontal ? 'horizontalBar' : 'bar';
  }
}
