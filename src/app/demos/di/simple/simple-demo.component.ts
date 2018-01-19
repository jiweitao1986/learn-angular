import { Component, Inject, OnInit} from '@angular/core';
import { Logger, ComponentLogger } from '../../../shared/services/logger';

@Component({
    selector: 'app-simple',
    template: `
      <div>
        <app-sub-simple content="First"></app-sub-simple>
        <app-sub-simple content="Second"></app-sub-simple>
      </div>
    `,
    providers: [
      //{provide: 'Logger', useClass: ComponentLogger}
    ]
})
class SimpleDemoComponent implements OnInit {

    /**
     * 构造函数
     */
    constructor(@Inject('Logger')logger: Logger) {
      logger.write('SimpleDemoComponent');
    }

    /**
     * 组件初始化
     */
    ngOnInit() {
    }
}

export { SimpleDemoComponent };
