import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpDemoComponent } from './http-demo.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: 'http',
    component: HttpDemoComponent,
    children: [
      { path: '', redirectTo: 'get', pathMatch: 'full' },
      { path: 'get',  component: GetComponent },
      { path: 'post', component: PostComponent }
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
