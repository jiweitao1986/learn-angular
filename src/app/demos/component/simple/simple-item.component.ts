/**
 * Simple Demo
 */

import {
  Component,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Injector,
  
  OnInit
} from '@angular/core';

/**
 * Simple Item 组件
 */
@Component({
  selector: 'app-simple-item',
  template: `
    <h3>Simple Item</h3>
    <ng-content></ng-content>
    <p> Simple Item Introduction: <ng-container *ngIf="showIntro"> 暂无。 </ng-container></p>
  `
})
class SimpleItemComponent implements OnInit  {
  
  showIntro: boolean;

  constructor(
    elementRef: ElementRef,
    //templateRef: TemplateRef<any>,
    containerRef: ViewContainerRef,
    injector: Injector
  ) {
    this.showIntro = true;
    console.log(elementRef);
  }

  ngOnInit() {
  }
}


export { SimpleItemComponent }
