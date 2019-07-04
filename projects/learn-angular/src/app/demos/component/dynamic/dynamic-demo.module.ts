// 导入模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 组件
import { DynamicDemoComponent} from './dynamic-demo.component';
import { DynamicDemoItemComponent} from './dynamic-demo-item.component';
import { ItemsHostDirective } from './items-host.directive';

/**
 * 动态组件模块
 */
@NgModule({
    declarations: [
      DynamicDemoComponent,
      DynamicDemoItemComponent,
      ItemsHostDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
      DynamicDemoComponent,
    ],
    entryComponents: [DynamicDemoItemComponent]
})
class DynamicDemoModule {
  
  /**
   * 构造函数
   */
  constructor() {
  }
}

export { DynamicDemoModule };
