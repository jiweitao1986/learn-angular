/**
 * Dynamic Demo Item
 */

import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';


/**
 * DynamicDemoItemComponent 组件
 */
@Component({
  selector: 'app-dynamic-demo-item',
  template: `
    <div>Item Component</div>
  `
})

class DynamicDemoItemComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() content: string;

  /**
   * 构造函数
   */
  constructor() {
    this.content = 'Default Content';
  }

  ngOnInit() {
  }

  ngOnChanges(simples: SimpleChanges) {
  }

  ngAfterViewInit() {

  }
}


export { DynamicDemoItemComponent }
