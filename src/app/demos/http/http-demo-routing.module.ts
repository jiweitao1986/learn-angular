import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpDemoComponent } from './http-demo.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

// Emps
import { EmpListComponent } from './emps/emp-list/emp-list.component';
import { EmpAddComponent } from './emps/emp-add/emp-add.component';
import { EmpEditComponent } from './emps/emp-edit/emp-edit.component';

const routes: Routes = [
  {
    path: 'http',
    component: HttpDemoComponent,
    children: [
      { path: '', redirectTo: 'get', pathMatch: 'full' },
      { path: 'get',  component: GetComponent },
      { path: 'post', component: PostComponent },
      { path: 'emp-list', component: EmpListComponent },
      { path: 'emp-add', component: EmpAddComponent },
      { path: 'emp-edit/:id', component: EmpEditComponent }
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
