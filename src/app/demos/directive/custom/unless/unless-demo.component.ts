import { Component, Inject, OnInit} from '@angular/core';
import {
  Logger, ComponentLogger
} from '../../../../shared/services/logger';

@Component({
    selector: 'app-unless-demo',
    template: `
      <p appHighlight>Highlight</p>
      <app-unless-demo-item appHighlight></app-unless-demo-item>
    `,
    providers: [
      // {provide: 'Logger', useClass: ComponentLogger}
    ]
})
class UnlessDemoComponent implements OnInit {

    /**
     * 构造函数
     */
    constructor(@Inject('Logger')logger: Logger) {
      logger.write('UnlessDemoComponent construct');
    }

    /**
     * 组件初始化
     */
    ngOnInit() {
    }
}

export { UnlessDemoComponent };
