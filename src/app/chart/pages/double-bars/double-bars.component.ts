import { Component, Input } from '@angular/core';

import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {
  providerLabels: string[] = ['2021', '2022','2023','2024','2025'];
  productData: ChartDataSets[] = [
    {
      backgroundColor: 'blue',
      data: [200, 300, 400, 300, 250],
      label: 'Cars'
    }
  ];
  providersData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendor B' },
  ];
}
