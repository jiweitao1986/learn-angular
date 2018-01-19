/**
 * 简单模块
 */

import { Component } from '@angular/core';


/**
 * Simple Demo 根组件
 */
@Component({
  selector: 'http-post-demo',
  templateUrl: './http-post-demo.component.html'
})

class HttpPostDemoComponent {
  title = 'Http Post Demo';
}


export { HttpPostDemoComponent }