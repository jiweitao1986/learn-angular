/**
 * 简单模块
 */

import { Component } from '@angular/core';


/**
 * Simple Demo 根组件
 */
@Component({
  selector: 'simple-demo',
  templateUrl: './simple-demo.component.html'
})

class SimpleDemoComponent {
  title = 'Simple Demo';
}


export { SimpleDemoComponent }
