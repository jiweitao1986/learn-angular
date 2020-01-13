// 导入模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentDemoRoutingModule } from './component-demo-routing.module';
import { ComponentDemoComponent} from './component-demo.component';

// 简单组件相关
import { SimpleDemoComponent} from './simple/simple-demo.component';
import { SimpleItemComponent} from './simple/simple-item.component';

// 动态组件相关
import { DynamicDemoModule } from './dynamic/dynamic-demo.module';

// 组件交互相关
import { InteractionComponent } from './interaction/interaction.component';
import { BookComponent } from './interaction/book.component';




/**
 * 组件Demo模块
 */
@NgModule({
    declarations: [
      ComponentDemoComponent,

      SimpleDemoComponent,
      SimpleItemComponent,

      InteractionComponent,
      BookComponent
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
