import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HttpDemoComponent } from './http-demo.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    HttpDemoComponent,
    GetComponent,
    PostComponent
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
