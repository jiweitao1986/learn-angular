/**
 * 指令验证Demo
 */

import { Component, Inject, OnInit} from '@angular/core';
import { Logger, LOGGER_TOKEN, DiComponentLogger } from '../../shared/services/logger';


@Component({
    selector: 'app-di-demo',
    template: `
      <div class="row">
          <div class="col-sm-2">
            <ul class="nav nav-pills nav-stacked">
              <li class="divider"></li>
              <li><a [routerLink]="['./simple-sub-feature']">Simple</a></li>
              <li><a [routerLink]="['./first-sub-feature']">First</a></li>
              <li><a [routerLink]="['./second-sub-feature']">Second</a></li>
            </ul>
          </div>
          <div class="col-sm-10">
            <router-outlet></router-outlet>
          </div>
      </div>
    `,
    providers: [
      { provide: LOGGER_TOKEN, useClass: DiComponentLogger }
    ]
})
class DiDemoComponent implements OnInit {

    /**
     * 构造函数
     */
    constructor(@Inject(LOGGER_TOKEN) logger: Logger) {
      logger.write('DiDemoComponent');
    }

    /**
     * 组件初始化
     */
    ngOnInit() {
    }
}

export { DiDemoComponent };
