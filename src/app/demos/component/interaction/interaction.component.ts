import { Component } from '@angular/core';
import { Book } from './types';

@Component({
  selector: 'app-interaction',
  template: `
    <ul>
      <li *ngFor="let book of books">
        <app-book [book]="book" (selected)="onBookSelected($event)"></app-book>
      </li>
    </ul>
    <p>The Selected BookId: <span>{{selectedBookId}}</span></p>
  `
})
class InteractionComponent {

  public books: Book[];

  public selectedBookId: number;

  constructor() {
    this.selectedBookId = -1;
    this.books = [
      { id: 1, title: 'Essential Angular', author: 'Jeff',   price: 10  },
      { id: 2, title: 'Angular Router',    author: 'Victor', price: 8  }
    ];
  }

  onBookSelected(bookId: number) {
    this.selectedBookId = bookId;
  }

}


export { InteractionComponent }
