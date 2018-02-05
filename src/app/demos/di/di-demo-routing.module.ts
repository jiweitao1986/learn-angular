import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiDemoComponent } from './di-demo.component';
import { SimpleDemoComponent } from './simple/simple-demo.component';


const routes: Routes = [
  {
    path: 'di',
    component: DiDemoComponent,
    children: [
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: 'simple', component: SimpleDemoComponent},
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
class DiDemoRoutingModule {
}

export { DiDemoRoutingModule };
