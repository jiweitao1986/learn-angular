import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestDemoComponent } from './test-demo.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestDemoComponent,
    children: [
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: 'simple', component: SimpleComponent }
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
class TestDemoRoutingModule {
}

export { TestDemoRoutingModule }
