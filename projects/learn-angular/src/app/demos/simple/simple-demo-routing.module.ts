import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleDemoComponent } from './simple-demo.component';

const routes: Routes = [
  { path: 'simple', component: SimpleDemoComponent },
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
class SimpleDemoRoutingModule {
}

export { SimpleDemoRoutingModule }
