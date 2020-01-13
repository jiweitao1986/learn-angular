import { NgModule, Inject } from '@angular/core';
import { Logger, LOGGER_TOKEN, FirstSubFeatureModuleLogger } from '../../../shared/services/logger';
import { FirstSubFeatureComponent } from './first-sub-feature.component';

/**
 * FirstSubFeatureModule
 */
@NgModule({
    declarations: [
      FirstSubFeatureComponent,
    ],
    imports: [],
    exports: [
      FirstSubFeatureComponent,
    ],
    providers: [
      { provide: LOGGER_TOKEN, useClass: FirstSubFeatureModuleLogger }
    ]
})
class FirstSubFeatureModule {

  constructor(@Inject(LOGGER_TOKEN)logger: Logger) {
    logger.write('FirstSubFeatureModule');
  }

}

export { FirstSubFeatureModule };
