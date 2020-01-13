import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'hero-center/list',   component: HeroListComponent },
  { path: 'hero-center/detail', component: HeroDetailComponent },
  { path: '', redirectTo: 'hero-center/list', pathMatch: 'full' }
];

export { routes }
