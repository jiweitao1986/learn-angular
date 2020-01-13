import {
  Directive, HostListener, HostBinding, Input,
  TemplateRef, ViewContainerRef, ElementRef,
  Inject, SkipSelf, Host, Self, forwardRef, Injector
} from '@angular/core';


/**
 * 文本高亮指令
 */
@Directive({
  selector: '[appHighlight]'
})
class HighlightDirective {


  /**
   * 高亮颜色
   */
  @Input('highlightColor')
  highlightColor: string;


  // @HostBinding('attribute.class')
  activeClass: string;

  /**
   * 构造函数
   * @param el
   */
  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private injector: Injector
  ) {
    console.log('HighlightDirective constructor');
  }

  /**
   * 监听宿主的mouseenter
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
    this.activeClass = 'active';
  }

  /**
   * 监听宿主的mouseleave
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.activeClass = '';
  }

  /**
   * 给nativeElement加背景色
   * @param color
   */
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

export { HighlightDirective };
