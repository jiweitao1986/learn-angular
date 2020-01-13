import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: '<h1>{{title}}</h1>'
})
class SimpleComponent {
  public title: string;

  constructor() {
    this.title = 'simple'
  }
}

export { SimpleComponent }
