import { Component, Inject, OnInit} from '@angular/core';
import { Logger, LOGGER_TOKEN } from '../../../shared/services/logger';

@Component({
    selector: 'app-second-sub-feature',
    template: `
      <div>Second Sub Feature Component</div>
    `,
    providers: [
    ]
})
class SecondSubFeatureComponent implements OnInit {

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

export { SecondSubFeatureComponent };
