/**
 * Dynamic Demo
 */

import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  TemplateRef,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { DynamicDemoItemComponent } from './dynamic-demo-item.component';
import { ItemsHostDirective } from './items-host.directive';

/**
 * Simple Demo 组件
 */
@Component({
  selector: 'app-dynamic-demo',
  template: `


  <div style="margin-top: 20px;">
      <dl>
        <dt>通过模板引入</dt>
      </dl>
      <div>
        <app-dynamic-demo-item content="Template Item 1st"></app-dynamic-demo-item>
        <app-dynamic-demo-item content="Template Item 2nd"></app-dynamic-demo-item>
      </div>
    </div>


    <div style="margin-top: 20px;">
      <dl>
        <dt>插入到指令的宿主元素内</dt>
      </dl>
      <div items-host>
        这是Host内的默认内容
      </div>
    </div>


    <div style="margin-top: 20px;">
      <dl>
        <dt>插入到ng-template内</dt>
      </dl>
      <ng-template #tpl>
        <p>Template内的默认内容</p>
      </ng-template>
    <div>

    <div style="margin-top: 20px;">
      <dl>
        <dt>插入到Div</dt>
      </dl>
      <div #div>
        <p>Div内的默认内容</p>
      </div>
    <div>

    <div style="margin-top: 20px;">
      <dl>
        <dt>插入到父组件最后</dt>
      </dl>
    <div>
    `
})
class DynamicDemoComponent implements AfterViewInit, OnDestroy {


  @ViewChild(ItemsHostDirective) itemsHost: ItemsHostDirective;


  @ViewChild('tpl')
  tplRef: TemplateRef<any>;

  @ViewChild('tpl', {read: ViewContainerRef})
  tplViewContainerRef: ViewContainerRef;


  @ViewChild('div')
  divRef: ElementRef;

  @ViewChild('div', {read: ViewContainerRef})
  divViewContainerRef: ViewContainerRef;


  /**
   * 构造函数
   */
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
  }


  /**
   * 视图初始化后
   */
  ngAfterViewInit() {
    this.loadItemsIntoParent();
    this.loadItemsIntoDirectiveHost();
    this.loadItemsIntoNgTemplate();
    this.loadItemsIntoDiv()
  }

  /**
   * 组件销毁时
   */
  ngOnDestroy() {

  }

  /**
   * 加载子组件到父组件尾部
   */
  loadItemsIntoParent() {
    let componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(DynamicDemoItemComponent);

    this.viewContainerRef.clear();

    this.createItemComponent(this.viewContainerRef, 'Sub Item 1st');
    this.createItemComponent(this.viewContainerRef, 'Sub Item 2st');
  }

  /**
   * 加载子组件到ItemsHost指令宿主的内部
   */
  loadItemsIntoDirectiveHost() {

    let viewContainerRef = this.itemsHost.viewContainerRef;
    viewContainerRef.clear();
    this.createItemComponent(
      viewContainerRef, 'Directive: Item1st');
    this.createItemComponent(
      viewContainerRef, 'Directive: Item 2nd');
  }

  /**
   * 添加子组件到<ng-tempalte>中
   */
  loadItemsIntoNgTemplate() {
    this.tplViewContainerRef.clear();
    this.createItemComponent(
      this.tplViewContainerRef, 'Template: Item1st');
    this.createItemComponent(
      this.tplViewContainerRef, 'Template: Item 2nd');
  }

  /**
   * 添加子组件到<div>中
   */
  loadItemsIntoDiv() {
    this.createItemComponent(this.divViewContainerRef, '');
    this.createItemComponent(this.divViewContainerRef, '');
  }

  /**
   * 创建Item组件
   * @param content
   */
  createItemComponent(
    viewContainerRef: ViewContainerRef,
    content: string
  ): ComponentRef<DynamicDemoItemComponent> {

    let componentFactory = this.componentFactoryResolver
    .resolveComponentFactory(DynamicDemoItemComponent);
    let itemCmpRef = viewContainerRef.createComponent(componentFactory);
    return itemCmpRef;
  }
}

export { DynamicDemoComponent }
