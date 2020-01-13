import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes as heroCenterRoutes } from './hero-center/hero-center-routes';
import { HeroDemoComponent } from './hero-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HeroDemoComponent,
    children: heroCenterRoutes
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
class HeroDemoRoutingModule {
}

export { HeroDemoRoutingModule }
