import { Routes } from '@angular/router';

import {
  HighlightDemoComponent
} from './custom/highlight/highlight-demo.component';
import {
  UnlessDemoComponent
} from './custom/unless/unless-demo.component';



// emp路由
const directiveRoutes: Routes = [
    { path: '', redirectTo: 'highlight', pathMatch: 'full' },

    //custom directives
    { path: 'highlight', component: HighlightDemoComponent},
    { path: 'unless',    component: UnlessDemoComponent}
];

export { directiveRoutes }
