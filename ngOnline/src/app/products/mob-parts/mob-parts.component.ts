import { ComService } from './../../services/com.service';
import { Component, OnInit } from '@angular/core';
import { MobParts } from '../../models/mob-parts';
import { isArray } from 'util';
// import { MOBPARTS } from './mock-data';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
  styles: [],
})
export class MobPartsComponent implements OnInit {
  constructor(private comService: ComService) {
    console.log('2 Constructor Block');
  }

  ngOnInit(): void {
    console.log('1 Init Block...');
    // this.mobParts = this.comService.getMobParts();
    this.comService.getMobParts().subscribe((res) => (this.mobParts = res));
  }

  // 8 lifecylehooks

  ngOnDestroy(): void {
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

  // mobParts: MobParts[] = MOBPARTS;

  mobParts: MobParts[];

  calcProd() {
    let tot = 0;
    if (Array.isArray(this.mobParts)) {
      for (let mobPart of this.mobParts) {
        tot = tot + mobPart.inStock;
      }
    }
    return tot;
  }

  // calcProd() {
  //   let tot = 0;
  //   if (Array.isArray(this.mobParts)) {
  //     for (let mobPart of this.mobParts) {
  //       tot = tot + mobPart.inStock;
  //     }
  //   }
  //   return tot;
  // }

  upQuantity(mobPart) {
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }
}
