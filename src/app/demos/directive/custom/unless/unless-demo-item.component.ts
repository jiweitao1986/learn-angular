import { Component, Inject, OnInit} from '@angular/core';
import {
  Logger, SubComponentLogger
} from '../../../../shared/services/logger';

@Component({
    selector: 'app-unless-demo-item',
    template: '<p>这是一个Item</p>',
    providers: [
      {provide: 'Logger', useClass: SubComponentLogger}
    ]
})
class UnlessDemoItemComponent implements OnInit {

    /**
     * 构造函数
     */
    constructor() {
    }

    /**
     * 组件初始化
     */
    ngOnInit() {
    }
}

export { UnlessDemoItemComponent };
