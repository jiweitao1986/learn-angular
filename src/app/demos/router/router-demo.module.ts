// 导入模块
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 组件
import { RouterDemoComponent } from './router-demo.component';
import { SimpleDemoComponent } from './simple/simple-demo.component';

/**
 * Simple模块
 */
@NgModule({
    declarations: [
        RouterDemoComponent,
        SimpleDemoComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        RouterDemoComponent,
        
    ]
})
class RouterDemoModule {
}

export { RouterDemoModule };
