import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'charts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
