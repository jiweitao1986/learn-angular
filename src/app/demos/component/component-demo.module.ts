// 导入模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件
import { ComponentDemoComponent} from './component-demo.component';
import { SimpleDemoComponent} from './simple/simple-demo.component';
import { SimpleItemComponent} from './simple/simple-item.component';

import { ComponentDemoRoutingModule } from './component-demo-routing.module';
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

        ComponentDemoRoutingModule,
        DynamicDemoModule
    ],
    exports: [
      ComponentDemoComponent
    ]
})
class ComponentDemoModule {
}

export { ComponentDemoModule };
