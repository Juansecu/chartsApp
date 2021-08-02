import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'chart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
