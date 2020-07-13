import { from } from 'rxjs';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styles: [],
})
export class MotoComponent implements OnInit {
  mobParts: any[];
  constructor(angularFireDatabase: AngularFireDatabase) {
    angularFireDatabase
      .list('/apiData')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log(this.mobParts);
        console.log('Heyyy');
      });
  }

  ngOnInit(): void {}
}
