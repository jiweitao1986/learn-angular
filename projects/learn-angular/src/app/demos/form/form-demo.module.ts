// 导入模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 组件
import { FormDemoComponent } from './form-demo.component';
import { TemplateFormDemoComponent } from './template-form/template-form-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form/reactive-form-demo.component';
import { DynamicFormDemoComponent } from './dynamic-form/dynamic-form-demo.component';

/**
 * Simple模块
 */
@NgModule({
    declarations: [
        FormDemoComponent,
        TemplateFormDemoComponent,
        ReactiveFormDemoComponent,
        DynamicFormDemoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormDemoComponent
    ]
})
class FormDemoModule {
}

export { FormDemoModule };
