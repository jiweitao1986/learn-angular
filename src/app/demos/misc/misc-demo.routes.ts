import { Routes } from '@angular/router';

import { ImmutableDemoComponent } from './immutable/immutable-demo.component';


// misc路由
const miscRoutes: Routes = [
    { path: '', redirectTo: 'immutable', pathMatch: 'full' },
    { path: 'immutable',  component: ImmutableDemoComponent },
];

export { miscRoutes }
