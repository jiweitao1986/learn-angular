import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpDemoComponent } from './http-demo.component';
import { HttpGetDemoComponent } from './get/http-get-demo.component';
import { HttpPostDemoComponent } from './post/http-post-demo.component';


const routes: Routes = [
  {
    path: 'http',
    component: HttpDemoComponent,
    children: [
      { path: '', redirectTo: 'get', pathMatch: 'full' },
      { path: 'get',  component: HttpGetDemoComponent },
      { path: 'post', component: HttpPostDemoComponent }
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
class HttpDemoRoutingModule {
}

export { HttpDemoRoutingModule };
