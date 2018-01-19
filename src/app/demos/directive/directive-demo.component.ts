/**
 * 指令验证Demo
 */

import { Component, Inject, OnInit} from '@angular/core';

@Component({
    selector: 'app-directive-demo',
    template: `
      <div class="row">
          <div class="col-sm-2">
              <ul class="nav nav-pills nav-stacked">
                  <li class="divider"></li>
                  <li><a [routerLink]="['./highlight']">Simple</a></li>
                  <li><a [routerLink]="['./unless']">Unless</a></li>
              </ul>
          </div>
          <div class="col-sm-10">
              <router-outlet></router-outlet>
          </div>
      </div>
    `
})
class DirectiveDemoComponent implements OnInit {

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

export { DirectiveDemoComponent };
