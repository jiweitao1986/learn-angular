import {
  Component, Inject, OnInit, Input
} from '@angular/core';

@Component({
    selector: 'app-simple-router',
    template: `
      <div class="well">简单路由加载</div>
    `,
    providers: [
      
    ]
})
class SimpleDemoComponent implements OnInit {

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

export { SimpleDemoComponent };