import {
  Component, Inject, OnInit, Input
} from '@angular/core';

@Component({
    selector: 'app-simple-demo',
    template: `
    <div class="well">简单测试</div>
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