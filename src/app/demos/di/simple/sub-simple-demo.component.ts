import {
  Component, Inject, OnInit, Input
} from '@angular/core';
import { Logger, SubComponentLogger } from '../../../shared/services/logger';

@Component({
    selector: 'app-sub-simple',
    template: `
    <div class="well">{{content}}</div>
    `,
    providers: [
      {provide: 'Logger', useClass: SubComponentLogger}
    ]
})
class SubSimpleDemoComponent implements OnInit {

    /**
     * 内容
     */
    @Input() content: string;

    /**
     * 构造函数
     */
    constructor(@Inject('Logger')logger: Logger) {
      logger.write('SubSimpleDemoComponent');
    }

    /**
     * 组件初始化
     */
    ngOnInit() {
    }
}

export { SubSimpleDemoComponent };