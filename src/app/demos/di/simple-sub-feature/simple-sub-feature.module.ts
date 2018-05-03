// 导入模块
import { NgModule, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Logger, LOGGER_TOKEN, SimpleSubFeatureModuleLogger } from '../../../shared/services/logger';

// 组件、指令
import { SimpleSubFeatureComponent } from './simple-sub-feature.component';


/**
 * DirectiveDemoModule
 */
@NgModule({
    declarations: [
      SimpleSubFeatureComponent,
    ],
    imports: [
        RouterModule,
        HttpClientModule
    ],
    exports: [
      SimpleSubFeatureComponent,
    ],
    providers: [
      { provide: LOGGER_TOKEN, useClass: SimpleSubFeatureModuleLogger }
    ]
})
class SimpleSubFeatureModule {

  constructor() {
  }

}

export { SimpleSubFeatureModule };
