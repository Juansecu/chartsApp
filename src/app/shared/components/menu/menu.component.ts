import { Component } from '@angular/core';

import { Route } from '../../typings/Route';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  routes: Route[] = [
    {
      title: 'Bars',
      path: 'charts/bars'
    },
    {
      title: 'Double Bars',
      path: 'charts/double-bars'
    },
    {
      title: 'Pie',
      path: 'charts/pie'
    },
    {
      title: 'Pie HTTP',
      path: 'charts/pie-http'
    },
  ];
}
