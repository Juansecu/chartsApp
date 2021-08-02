import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BarsComponent } from "./pages/bars/bars.component";
import { DoubleBarsComponent } from "./pages/double-bars/double-bars.component";
import { DoughnutComponent } from "./pages/doughnut/doughnut.component";
import { PieHttpComponent } from "./pages/pie-http/pie-http.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "bars",
        component: BarsComponent,
      },
      {
        path: "double-bars",
        component: DoubleBarsComponent,
      },
      {
        path: "pie",
        component: DoughnutComponent,
      },
      {
        path: "pie-http",
        component: PieHttpComponent,
      },
      {
        path: "**",
        pathMatch: "full",
        redirectTo: "bars",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
