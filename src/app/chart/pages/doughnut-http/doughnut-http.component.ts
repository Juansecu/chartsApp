import { Component, OnInit } from "@angular/core";

import { ChartType } from "chart.js";
import { Color, Label, MultiDataSet } from "ng2-charts";

import { ChartService } from "../../services/chart.service";

@Component({
  selector: "app-doughnut-http",
  templateUrl: "./doughnut-http.component.html",
  styles: [],
})
export class DoughnutHttpComponent implements OnInit {
  doughnutChartType: ChartType = "doughnut";
  colors: Color[] = [
    {
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
    },
  ];
  doughnutChartData: MultiDataSet = [];
  doughnutChartLabels: Label[] = [];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getChartData().subscribe((data) => {
      const keys = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = keys;
      this.doughnutChartData = values;
    });
  }
}
