import { NgModule, Inject } from '@angular/core';
import { Logger, LOGGER_TOKEN, SecondSubFeatureModuleLogger } from '../../../shared/services/logger';
import { SecondSubFeatureComponent } from './second-sub-feature.component';

/**
 * SecondSubFeatureModule
 */
@NgModule({
    declarations: [
      SecondSubFeatureComponent,
    ],
    imports: [],
    exports: [
      SecondSubFeatureComponent,
    ],
    providers: [
      { provide: LOGGER_TOKEN, useClass: SecondSubFeatureModuleLogger }
    ]
})
class SecondSubFeatureModule {

  constructor(@Inject(LOGGER_TOKEN)logger: Logger) {
    logger.write('SecondSubFeatureModule');
  }

}

export { SecondSubFeatureModule };
