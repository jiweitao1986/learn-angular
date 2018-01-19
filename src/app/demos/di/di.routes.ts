import { Routes } from '@angular/router';

import {
  SimpleDemoComponent
} from './simple/simple-demo.component';

// 简单路由
const diRoutes: Routes = [
    { path: '', redirectTo: 'simple', pathMatch: 'full' },

    //custom directives
    { path: 'simple', component: SimpleDemoComponent},
];

export { diRoutes }
