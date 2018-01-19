// 导入模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 组件
import { ComponentDemoComponent} from './component-demo.component';
import { SimpleDemoComponent} from './simple/simple-demo.component';
import { SimpleItemComponent} from './simple/simple-item.component';

import { DynamicDemoModule } from './dynamic/dynamic-demo.module';

/**
 * 组件Demo模块
 */
@NgModule({
    declarations: [

      ComponentDemoComponent,
      SimpleDemoComponent,
      SimpleItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        DynamicDemoModule
    ],
    exports: [
      ComponentDemoComponent
    ]
})
class ComponentDemoModule {
}

export { ComponentDemoModule };