import { Component, Inject } from '@angular/core';
import { Logger, LOGGER_TOKEN, AppComponentLogger } from './shared/services/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: []
})
export class AppComponent {
  title = 'app';
  constructor() {
  }
}
