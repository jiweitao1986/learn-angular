/**
 * 简单模块
 */

import { Component, OnInit } from '@angular/core';


/**
 * Simple Demo 根组件
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})

class PostComponent implements OnInit {
  
  title = 'Post Demo';

  constructor() {

  }

  ngOnInit() {
  }
}


export { PostComponent }