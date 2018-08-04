import {
  Directive, TemplateRef, ViewContainerRef, ElementRef,
  Injectable, Injector, Inject, Input,
  SkipSelf, Optional, Self, forwardRef, Host
} from '@angular/core';

import {
  Logger, DirectiveLogger
} from '../../../../shared/services/logger';

@Directive({
  selector: '[appUnless]',
})
class UnlessDirective {

  /**
   * view是否已经创建
   */
  private hasView: boolean;

  /**
   * 构造函数
   * @param templateRef 通过它引用ng-template的实例
   * @param viewContainer viewContainer
   */
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    private el: ElementRef
  ) {
  }

  /**
   * 输入
   */
  @Input() set appUnless(condition: boolean) {

    if (!condition && !this.hasView) {

      // 创建View
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;

    } else if (condition && this.hasView) {

      this.viewContainer.clear();
      this.hasView = false;

    }
  }
}

export { UnlessDirective };
