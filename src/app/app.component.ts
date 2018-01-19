import { Component, Inject } from '@angular/core';

import { Logger, AppComponentLogger } from './shared/services/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: [
    // { provide: 'Logger', useClass: AppComponentLogger }
  ]
})
export class AppComponent {
  title = 'app';
  constructor(@Inject('Logger')logger: Logger) {
    logger.write('AppComponent');
  }
}
