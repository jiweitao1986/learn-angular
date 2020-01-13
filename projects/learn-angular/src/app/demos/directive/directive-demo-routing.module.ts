import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectiveDemoComponent } from './directive-demo.component';
import { HighlightDemoComponent } from './custom/highlight/highlight-demo.component';
import { UnlessDemoComponent } from './custom/unless/unless-demo.component';


const routes: Routes = [
  {
    path: 'directive',
    component: DirectiveDemoComponent,
    children: [
      { path: '', redirectTo: 'highlight', pathMatch: 'full' },
      { path: 'highlight', component: HighlightDemoComponent},
      { path: 'unless',    component: UnlessDemoComponent}
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
class DirectiveDemoRoutingModule {
}

export { DirectiveDemoRoutingModule };
