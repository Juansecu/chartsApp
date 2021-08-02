import { Component } from "@angular/core";

import { Route } from "../../typings/Route";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styles: [],
})
export class MenuComponent {
  routes: Route[] = [
    {
      title: "Bars",
      path: "chart/bars",
    },
    {
      title: "Double Bars",
      path: "chart/double-bars",
    },
    {
      title: "Doughnut",
      path: "chart/doughnut",
    },
    {
      title: "Doughnut HTTP",
      path: "chart/doughnut-http",
    },
  ];
}
