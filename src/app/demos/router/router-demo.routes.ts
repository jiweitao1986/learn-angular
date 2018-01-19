import { Routes } from '@angular/router';
import {
  SimpleDemoComponent
} from './simple/simple-demo.component';


const routerRoutes: Routes = [
  { path: '', redirectTo: 'simple', pathMatch: 'full' },
  { path: 'simple',  component: SimpleDemoComponent },
];

export { routerRoutes }
