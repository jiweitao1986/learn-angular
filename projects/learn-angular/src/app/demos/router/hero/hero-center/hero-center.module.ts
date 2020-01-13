import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    HeroListComponent,
    HeroDetailComponent
  ]
})
class HeroCenterModule {
}

export { HeroCenterModule };
