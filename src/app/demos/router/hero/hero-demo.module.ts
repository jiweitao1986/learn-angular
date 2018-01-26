import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroCenterModule } from './hero-center/hero-center.module';
import { HeroDemoRoutingModule } from './hero-demo-routing.module';
import { HeroDemoComponent } from './hero-demo.component';

@NgModule({
  declarations: [
    HeroDemoComponent
  ],
  imports: [
    HeroCenterModule,
    HeroDemoRoutingModule
  ],
  exports: [
    HeroDemoComponent,
  ]
})
class HeroDemoModule {
}

export { HeroDemoModule };
