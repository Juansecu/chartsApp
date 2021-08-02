import { Component } from "@angular/core";

import { ChartType } from "chart.js";
import { Label, MultiDataSet } from "ng2-charts";

@Component({
  selector: "app-doughnut",
  templateUrl: "./doughnut.component.html",
  styles: [],
})
export class DoughnutComponent {
  doughnutChartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales",
  ];
  doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  doughnutChartType: ChartType = "doughnut";

  constructor() {}

  ngOnInit(): void {}
}
