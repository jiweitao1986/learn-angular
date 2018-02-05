/**
 * 简单模块
 */

import { Component, OnInit } from '@angular/core';


/**
 * Simple Demo 根组件
 */
@Component({
  selector: 'http-post-demo',
  templateUrl: './http-post-demo.component.html'
})

class HttpPostDemoComponent implements OnInit {
  
  title = 'Post Demo';

  constructor() {

  }

  ngOnInit() {
  }
}


export { HttpPostDemoComponent }