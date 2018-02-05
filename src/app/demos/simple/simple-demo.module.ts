import { NgModule } from '@angular/core';

import { SimpleDemoRoutingModule } from './simple-demo-routing.module';
import { SimpleDemoComponent } from './simple-demo.component';


@NgModule({
  declarations: [
    SimpleDemoComponent
  ],
  imports: [
    SimpleDemoRoutingModule
  ],
  exports: [
    SimpleDemoComponent,
  ]
})
class SimpleDemoModule {
}

export { SimpleDemoModule };
