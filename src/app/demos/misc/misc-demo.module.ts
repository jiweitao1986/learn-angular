// 导入模块
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 组件
import { MiscDemoComponent } from './misc-demo.component';
import { ImmutableDemoComponent } from './immutable/immutable-demo.component';


/**
 * Misc Module
 */
@NgModule({
    declarations: [
        MiscDemoComponent,
        ImmutableDemoComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        MiscDemoComponent
    ]
})
class MiscDemoModule {
}

export { MiscDemoModule };
