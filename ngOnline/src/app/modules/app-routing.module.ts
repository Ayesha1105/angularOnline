import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MobPartsComponent } from '../products/mob-parts/mob-parts.component';
import { BooksComponent } from '../products/books/books.component';
import { WatchesComponent } from '../products/watches/watches.component';
import { MotoComponent } from '../products/mob-parts/moto/moto.component';
import { SamsungComponent } from '../products/mob-parts/samsung/samsung.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';
import { HomeComponent } from '../layout/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'mobile',
    component: MobPartsComponent,
    children: [
      {
        path: 'moto',
        component: MotoComponent,
      },
      {
        path: 'samsung',
        component: SamsungComponent,
      },
    ],
  },
  { path: 'book', component: BooksComponent },
  { path: 'watch', component: WatchesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
