// 导入模块
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 组件
import { SimpleDemoComponent } from './simple-demo.component';


/**
 * Simple模块
 */
@NgModule({
    declarations: [
        SimpleDemoComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        SimpleDemoComponent
    ]
})
class SimpleDemoModule {
}

export { SimpleDemoModule };
