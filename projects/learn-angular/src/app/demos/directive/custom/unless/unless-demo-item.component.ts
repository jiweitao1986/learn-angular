import { Component, Inject, OnInit} from '@angular/core';

@Component({
    selector: 'app-unless-demo-item',
    template: '<p>这是一个Item</p>'
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
