import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SimpleDemoRoutingModule } from './simple-demo-routing.module';
import { SimpleDemoComponent } from './simple-demo.component';

/**
 * Simple模块
 */
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
