import { NgModule, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Logger, FeatureModuleLogger } from '../../shared/services/logger';

import { DiDemoRoutingModule } from './di-demo-routing.module';
import { SimpleDemoModule } from './simple/simple-demo.module';

import { DiDemoComponent } from './di-demo.component';


/**
 * DiDemoModule
 */
@NgModule({
    declarations: [
      DiDemoComponent,
    ],
    imports: [
        HttpClientModule,

        DiDemoRoutingModule,
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
