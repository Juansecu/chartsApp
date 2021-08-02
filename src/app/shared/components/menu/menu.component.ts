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
      path: 'chart/bars'
    },
    {
      title: 'Double Bars',
      path: 'chart/double-bars'
    },
    {
      title: 'Pie',
      path: 'chart/pie'
    },
    {
      title: 'Pie HTTP',
      path: 'chart/pie-http'
    },
  ];
}
