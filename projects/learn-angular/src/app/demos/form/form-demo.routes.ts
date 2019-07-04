import { Routes } from '@angular/router';

import { TemplateFormDemoComponent } from './template-form/template-form-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form/reactive-form-demo.component';
import { DynamicFormDemoComponent } from './dynamic-form/dynamic-form-demo.component';


/**
 * 表单路由定义
 */
const formRoutes: Routes = [
    { path: '', redirectTo: 'template-form', pathMatch: 'full' },
    { path: 'template-form', component: TemplateFormDemoComponent },
    { path: 'reactive-form', component: ReactiveFormDemoComponent },
    { path: 'dynamic-form',  component: DynamicFormDemoComponent }
];

export { formRoutes }
