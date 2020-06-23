import { Component, OnInit } from '@angular/core';
import { MobParts } from '../../models/mob-parts';
import { MOBPARTS } from './mock-data';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
  styles: [],
})
export class MobPartsComponent implements OnInit {
  ngOnInit(): void {
    this.mobParts = MOBPARTS;
    console.log('1 Init Block...');
  }

  constructor() {
    console.log('2 Constructor Block');
  }

  // 8 lifecylehooks

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
    console.log('3 ngOnDestroy Block...!');
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  // arr = ['Pune', 'Hyderabad', 'Mumbai'];

  mobParts: MobParts[] = MOBPARTS;

  calcProd() {
    let tot = 0;
    for (let mobPart of this.mobParts) {
      tot = tot + mobPart.inStock;
    }
    return tot;
  }

  upQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }
}
