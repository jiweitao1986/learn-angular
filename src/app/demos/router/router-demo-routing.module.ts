import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterDemoComponent } from './router-demo.component';
import { SimpleDemoComponent } from './simple/simple-demo.component';

const routes: Routes = [
  {
    path: 'router',
    component: RouterDemoComponent,
    children: [
      { path: 'simple', component: SimpleDemoComponent },
      { path: 'hero',   loadChildren: 'app/demos/router/hero/hero-demo.module#HeroDemoModule'},
      { path: '', redirectTo: 'simple', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
class RouterDemoRoutingModule {
}

export { RouterDemoRoutingModule }
