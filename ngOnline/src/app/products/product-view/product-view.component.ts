import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
})
export class ProductViewComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((param) =>
      console.log('param : ', param.get('prodObj'))
    );
  }

  ngOnInit(): void {}
}
