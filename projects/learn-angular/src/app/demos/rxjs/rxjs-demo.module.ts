// 导入模块
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 组件
import { RxjsDemoComponent } from './rxjs-demo.component';


/**
 * Rxjs Demo 模块
 */
@NgModule({
    declarations: [
        RxjsDemoComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        RxjsDemoComponent
    ]
})
class RxjsDemoModule {
}

export { RxjsDemoModule };
