import { Routes } from '@angular/router';

import { SimpleDemoComponent} from './simple/simple-demo.component';
import { DynamicDemoComponent} from './dynamic/dynamic-demo.component';
/**
 * 表单路由定义
 */
const componentRoutes: Routes = [
    { path: '', redirectTo: 'dynamic', pathMatch: 'full' },
    { path: 'simple', component: SimpleDemoComponent },
    { path: 'dynamic', component: DynamicDemoComponent },
];

export { componentRoutes }
