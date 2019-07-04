import { Component, Inject, OnInit} from '@angular/core';

@Component({
    selector: 'app-unless-demo',
    template: `
      <p appHighlight>Highlight</p>
      <app-unless-demo-item appHighlight></app-unless-demo-item>
    `,
    providers: [
    ]
})
class UnlessDemoComponent implements OnInit {

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

export { UnlessDemoComponent };
