/**
 * Dynamic Demo Item
 */

import {
  Component, ComponentFactoryResolver, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit
} from '@angular/core';


/**
 * DynamicDemoItemComponent 组件
 */
@Component({
  selector: 'app-dynamic-demo-item',
  template: `
    <div>{{content}}</div>
  `
})
class DynamicDemoItemComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  content: string;

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
