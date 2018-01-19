
import { Routes } from '@angular/router';

// Component
import { componentRoutes } from './demos/component/component-demo.routes';
import { ComponentDemoComponent } from './demos/component/component-demo.component';

// Directive
import { directiveRoutes } from './demos/directive/directive.routes';
import { DirectiveDemoComponent } from './demos/directive/directive-demo.component';

// Di
import { diRoutes } from './demos/di/di.routes';
import { DiDemoComponent } from './demos/di/di-demo.component';

//Routes
import { routerRoutes } from './demos/router/router-demo.routes';
import { RouterDemoComponent } from './demos/router/router-demo.component';

// Form
import { formRoutes } from './demos/form/form-demo.routes';
import { FormDemoComponent } from './demos/form/form-demo.component';

// Http
import { httpRoutes } from './demos/http/http-demo.routes';
import { HttpDemoComponent } from './demos/http/http-demo.component';

// Rxjs
import { RxjsDemoComponent } from './demos/rxjs/rxjs-demo.component';

// Misc
import { miscRoutes } from './demos/misc/misc-demo.routes';
import { MiscDemoComponent } from './demos/misc/misc-demo.component';

// Simple
import { SimpleDemoComponent } from './demos/simple/simple-demo.component';


/**
 * 根路由定义
 */
const rootRoutes: Routes = [
    { path: '',          redirectTo: 'component',    pathMatch: 'full' },
    { path: 'di',        component: DiDemoComponent,       children: diRoutes},
    { path: 'router',    component: RouterDemoComponent,    children: routerRoutes},
    { path: 'component', component: ComponentDemoComponent, children: componentRoutes},
    { path: 'directive', component: DirectiveDemoComponent, children: directiveRoutes},
    { path: 'form',      component: FormDemoComponent,      children: formRoutes},
    { path: 'http',      component: HttpDemoComponent,      children: httpRoutes },
    { path: 'misc',      component: MiscDemoComponent,      children: miscRoutes },
    { path: 'rxjs',      component: RxjsDemoComponent},
    { path: 'simple',    component: SimpleDemoComponent},
];

export { rootRoutes };
