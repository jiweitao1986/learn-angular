import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDemoComponent } from './component-demo.component';
import { SimpleDemoComponent} from './simple/simple-demo.component';
import { DynamicDemoComponent} from './dynamic/dynamic-demo.component';


/**
 * 表单路由定义
 */
const routes: Routes = [
  {
    path: 'component',
    component: ComponentDemoComponent,
    children: [
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: 'simple',  component: SimpleDemoComponent },
      { path: 'dynamic', component: DynamicDemoComponent },
    ]
  },
];


/**
 * 路由模块定义
 */
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
class ComponentDemoRoutingModule {
}

export { ComponentDemoRoutingModule };
