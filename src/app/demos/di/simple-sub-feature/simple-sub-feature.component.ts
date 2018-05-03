import { Component, Inject, OnInit} from '@angular/core';
import { Logger, LOGGER_TOKEN } from '../../../shared/services/logger';


@Component({
    selector: 'app-simple-sub-feature',
    template: `
      <div>Simple Sub Feature</div>
    `,
    providers: [
    ]
})
class SimpleSubFeatureComponent implements OnInit {

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

export { SimpleSubFeatureComponent };
