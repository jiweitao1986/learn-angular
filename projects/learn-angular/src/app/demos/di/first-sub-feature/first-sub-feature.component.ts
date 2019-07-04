import { Component, Inject, OnInit} from '@angular/core';
import { Logger, LOGGER_TOKEN  } from '../../../shared/services/logger';

@Component({
    selector: 'app-simple',
    template: `
      <div>First Sub Feature Component</div>
    `,
    providers: [
    ]
})
class FirstSubFeatureComponent implements OnInit {

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

export { FirstSubFeatureComponent };
