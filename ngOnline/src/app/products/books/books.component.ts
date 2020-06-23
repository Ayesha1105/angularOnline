import { BOOKDETAILS } from './book-data';
import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/models/book-detail';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  bookDetails: BookDetails[] = BOOKDETAILS;

  public total = BOOKDETAILS.length;

  catchVal(eventdata, eveObj) {
    console.clear();
    console.log("we are in 'catchVal' ", eventdata);
    console.log(' eveObj ', eveObj);
  }
}
