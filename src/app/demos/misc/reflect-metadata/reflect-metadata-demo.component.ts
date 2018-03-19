import { Component, OnInit } from '@angular/core';
import * as Reflect from 'reflect-metadata';

/**
 * 定义person类
 */
class Person {
  name: string;
  hello(content: string): void {

  }
}
Reflect.defineMetadata('testKey', 'testValue', Person);


@Component({
    selector: 'app-immutable-demo',
    template: '<h2>reflect metadata demo<h2>'
})
export class ReflectMetadataDemoComponent implements OnInit {

    /**
     * 构造函数
     */
    constructor() {

    }

    ngOnInit() {
      console.log('test ');
      console.log(Reflect.getMetadata('testKey', Person));
    }

}
