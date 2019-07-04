import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HttpDemoComponent } from './http-demo.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

// emps
import { EmpListComponent } from './emps/emp-list/emp-list.component';
import { EmpAddComponent } from './emps/emp-add/emp-add.component';
import { EmpEditComponent } from './emps/emp-edit/emp-edit.component';


@NgModule({
  declarations: [
    HttpDemoComponent,
    GetComponent,
    PostComponent,

    EmpListComponent,
    EmpAddComponent,
    EmpEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpDemoRoutingModule
  ],
  exports: [
    HttpDemoComponent,
  ]
})
class HttpDemoModule {
}

export { HttpDemoModule };
