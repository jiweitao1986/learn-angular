import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterDemoRoutingModule } from './router-demo-routing.module';
import { RouterDemoComponent } from './router-demo.component';
import { SimpleDemoComponent } from './simple/simple-demo.component';


@NgModule({
  declarations: [
      RouterDemoComponent,
      SimpleDemoComponent
  ],
  imports: [
    RouterDemoRoutingModule
  ],
  exports: [
    RouterDemoComponent,
  ]
})
class RouterDemoModule {
}

export { RouterDemoModule };
