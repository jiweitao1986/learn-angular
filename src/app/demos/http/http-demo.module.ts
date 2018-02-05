import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HttpDemoComponent } from './http-demo.component';
import { HttpGetDemoComponent } from './get/http-get-demo.component';
import { HttpPostDemoComponent } from './post/http-post-demo.component';


@NgModule({
  declarations: [
    HttpDemoComponent,
    HttpGetDemoComponent,
    HttpPostDemoComponent
  ],
  imports: [
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
