import { Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Book } from './types';

@Component({
  selector: 'app-book',
  template: `
    <dl>
      <dt>{{book.title}}</dt>
      <dd>{{book.author}}</dd>
      <dd>{{book.price}}</dd>
      <dd><button (click)="onClick(book.id)">选中</button></dd>
    </dl>
  `
})
class BookComponent {

  @Input()
  public book: Book;

  /**
   * 事件命名规则？？？？？？
   * 暂定规则如下：
   * 1、内部事件属性带Event；
   * 2、通过Output对外暴露，不带Event。
   */
  @Output('selected')
  public selectedEvent: EventEmitter<number>;

  constructor() {
    this.selectedEvent = new EventEmitter<number>();
  }

  onClick(id: number) {
    this.selectedEvent.emit(id);
  }
}


export { BookComponent };

