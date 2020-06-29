import { AuthGuard } from './../guards/auth.guard';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { LoginComponent } from './../admin/login/login.component';
import { ProductsComponent } from './../layout/products/products.component';
import { ContactUsComponent } from './../layout/contact-us/contact-us.component';
import { MobPartsComponent } from './../products/mob-parts/mob-parts.component';
import { MobNavComponent } from './../products/mob-parts/mob-nav/mob-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from '../products/books/books.component';
import { WatchesComponent } from '../products/watches/watches.component';
import { MotoComponent } from '../products/mob-parts/moto/moto.component';
import { SamsungComponent } from '../products/mob-parts/samsung/samsung.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';
import { HomeComponent } from '../layout/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Allproducts', component: ProductsComponent },

  { path: 'book', component: BooksComponent },
  { path: 'watch', component: WatchesComponent },

  {
    path: 'mobile',
    component: MobNavComponent,
    children: [
      { path: '', component: MobPartsComponent },
      {
        path: 'moto',
        component: MotoComponent,
      },
      {
        path: 'sam',
        component: SamsungComponent,
      },
    ],
  },

  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
