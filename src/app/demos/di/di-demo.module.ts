// 导入模块
import { NgModule, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Logger, FeatureModuleLogger } from '../../shared/services/logger';


// 组件
import { SimpleDemoModule } from './simple/simple-demo.module';
import { DiDemoComponent } from './di-demo.component';
// import { SimpleDemoComponent } from './simple/simple-demo.component';
// import { SubSimpleDemoComponent } from './simple/sub-simple-demo.component';

/**
 * DirectiveDemoModule
 */
@NgModule({
    declarations: [
      DiDemoComponent,
    ],
    imports: [
        RouterModule,
        HttpClientModule,

        SimpleDemoModule
    ],
    exports: [
      DiDemoComponent,
    ],
    providers: [
      // {provide: 'Logger', useClass: FeatureModuleLogger}
    ]
})
class DiDemoModule {
  constructor(@Inject('Logger')logger: Logger) {
    logger.write('DiDemoModule');
  }
}

export { DiDemoModule };
