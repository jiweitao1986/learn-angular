/**
 * 简单模块
 */

import { Component } from '@angular/core';


/**
 * Simple Demo 根组件
 */
@Component({
  selector: 'http-demo',
  templateUrl: './http-demo.component.html'
})

class HttpDemoComponent {
  title = 'Http Demo';
}


export { HttpDemoComponent }