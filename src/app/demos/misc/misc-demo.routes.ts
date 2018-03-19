import { Routes } from '@angular/router';

import { ImmutableDemoComponent } from './immutable/immutable-demo.component';
import { ReflectMetadataDemoComponent } from './reflect-metadata/reflect-metadata-demo.component';

// misc路由
const miscRoutes: Routes = [
    { path: '',                  redirectTo: 'immutable', pathMatch: 'full' },
    { path: 'immutable',         component: ImmutableDemoComponent },
    { path: 'reflect-metadata',  component: ReflectMetadataDemoComponent }
];

export { miscRoutes }
