import { Routes } from '@angular/router';
import { HttpGetDemoComponent } from './get/http-get-demo.component';
import { HttpPostDemoComponent } from './post/http-post-demo.component';

// 前台路由
const httpRoutes: Routes = [
    { path: '', redirectTo: 'get', pathMatch: 'full' },
    { path: 'get',  component: HttpGetDemoComponent },
    { path: 'post', component: HttpPostDemoComponent }
];

export { httpRoutes }
