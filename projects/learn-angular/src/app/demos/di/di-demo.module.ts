import { NgModule, Inject } from '@angular/core';

import { Logger, LOGGER_TOKEN, FeatureModuleLogger } from '../../shared/services/logger';
import { DiDemoRoutingModule } from './di-demo-routing.module';
import { SimpleSubFeatureModule } from './simple-sub-feature/simple-sub-feature.module';
import { FirstSubFeatureModule } from './first-sub-feature/first-sub-feature.module';
import { SecondSubFeatureModule } from './second-sub-feature/second-sub-feature.module';
import { DiDemoComponent } from './di-demo.component';


/**
 * DiDemoModule
 */
@NgModule({
  declarations: [
    DiDemoComponent,
  ],
  imports: [
    DiDemoRoutingModule,
    SimpleSubFeatureModule,
    FirstSubFeatureModule,
    SecondSubFeatureModule,
  ],
  exports: [
    DiDemoComponent,
  ],
  providers: [
    { provide: LOGGER_TOKEN, useClass: FeatureModuleLogger }
  ]
})
class DiDemoModule {
  constructor(@Inject(LOGGER_TOKEN) logger: Logger) {
    logger.write('DiDemoModule - a feature module about di.');
  }
}

export { DiDemoModule };
