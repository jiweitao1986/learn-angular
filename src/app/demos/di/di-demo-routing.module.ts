import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiDemoComponent } from './di-demo.component';

import { SimpleSubFeatureComponent } from './simple-sub-feature/simple-sub-feature.component';
import { FirstSubFeatureComponent } from './first-sub-feature/first-sub-feature.component';
import { SecondSubFeatureComponent } from './second-sub-feature/second-sub-feature.component';

const routes: Routes = [
  {
    path: 'di',
    component: DiDemoComponent,
    children: [
      { path: '', redirectTo: 'simple-sub-feature', pathMatch: 'full' },
      { path: 'simple-sub-feature', component: SimpleSubFeatureComponent},
      { path: 'first-sub-feature',  component: FirstSubFeatureComponent},
      { path: 'second-sub-feature', component: SecondSubFeatureComponent},

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
