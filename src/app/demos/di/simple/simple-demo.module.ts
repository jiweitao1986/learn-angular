// 导入模块
import { NgModule, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Logger, SubFeatureModuleLogger } from '../../../shared/services/logger';

// 组件、指令
import { SimpleDemoComponent } from './simple-demo.component';
import { SubSimpleDemoComponent } from './sub-simple-demo.component';

/**
 * DirectiveDemoModule
 */
@NgModule({
    declarations: [
      SimpleDemoComponent,
      SubSimpleDemoComponent,
    ],
    imports: [
        RouterModule,
        HttpClientModule
    ],
    exports: [
      SimpleDemoComponent,
      SubSimpleDemoComponent,
    ],
    providers: [
      {provide: 'Logger', useClass: SubFeatureModuleLogger}
    ]
})
class SimpleDemoModule {

  constructor(@Inject('Logger')logger: Logger) {
    logger.write('SimpleDemoModule');
  }

}

export { SimpleDemoModule };
