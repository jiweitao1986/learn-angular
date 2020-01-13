import { NgModule } from '@angular/core';

import { TestDemoRoutingModule } from './test-demo-routing.module';
import { TestDemoComponent } from './test-demo.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    TestDemoComponent,
    SimpleComponent
  ],
  imports: [
    TestDemoRoutingModule
  ],
  exports: [
    TestDemoComponent,
  ]
})
class TestDemoModule {
}

export { TestDemoModule };
