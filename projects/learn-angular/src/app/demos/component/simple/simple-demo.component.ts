/**
 * Simple Demo
 */

import { Component } from '@angular/core';


/**
 * Simple Demo 组件
 */
@Component({
  selector: 'app-simple-demo',
  template: `
    <app-simple-item>First Simple Item</app-simple-item>
    <app-simple-item>Second Simple Item</app-simple-item>
  `
})
class SimpleDemoComponent {
}


export { SimpleDemoComponent }
