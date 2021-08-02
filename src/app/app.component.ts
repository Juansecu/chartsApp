import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container row mt-5">
      <div class="col-md-3 col-sm-12">
        <app-menu></app-menu>
      </div>
      <div class="col">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'chartsApp';
}
