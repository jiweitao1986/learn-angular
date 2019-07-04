import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Welcome
import { WelcomeComponent } from './welcome.component';

// Form
import { formRoutes } from './demos/form/form-demo.routes';
import { FormDemoComponent } from './demos/form/form-demo.component';


// Rxjs
import { RxjsDemoComponent } from './demos/rxjs/rxjs-demo.component';

// Misc
import { miscRoutes } from './demos/misc/misc-demo.routes';
import { MiscDemoComponent } from './demos/misc/misc-demo.component';


/**
 * 根路由定义
 */
const routes: Routes = [
    { path: '',          redirectTo: 'welcome',           pathMatch: 'full' },
    { path: 'welcome',   component: WelcomeComponent},
    { path: 'form',      component: FormDemoComponent,      children: formRoutes},
    { path: 'misc',      component: MiscDemoComponent,      children: miscRoutes },
    { path: 'rxjs',      component: RxjsDemoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
class AppRoutingModule {
}

export { AppRoutingModule };
