import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartsModule } from "ng2-charts";

import { ChartsRoutingModule } from "./chart-routing.module";

import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { BarsComponent } from "./pages/bars/bars.component";
import { DoubleBarsComponent } from "./pages/double-bars/double-bars.component";
import { DoughnutComponent } from "./pages/doughnut/doughnut.component";
import { PieHttpComponent } from "./pages/pie-http/pie-http.component";

@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DoughnutComponent,
    PieHttpComponent,
    BarChartComponent,
  ],
  imports: [ChartsModule, CommonModule, ChartsRoutingModule],
})
export class ChartModule {}
