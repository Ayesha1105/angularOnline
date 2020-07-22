import { ProductViewComponent } from './../products/product-view/product-view.component';
import { ReactiveFormComponent } from './../components/forms/reactive-form/reactive-form.component';
import { TempFormsComponent } from './../components/forms/temp-forms/temp-forms.component';
import { WatchOffersComponent } from './../products/watches/watch-offers/watch-offers.component';
import { WatchDetailsComponent } from './../products/watches/watch-details/watch-details.component';
import { AuthGuard } from './../guards/auth.guard';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { LoginComponent } from './../admin/login/login.component';
import { ProductsComponent } from './../layout/products/products.component';
// import { ContactUsComponent } from './../layout/contact-us/contact-us.component';
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
import { ProdPaymentComponent } from '../products/prod-payment/prod-payment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Allproducts', component: ProductsComponent },
  { path: 'prodView/:prodObj', component: ProductViewComponent },
  { path: 'book', component: BooksComponent },

  { path: 'temp', component: TempFormsComponent },
  { path: 'reactForm', component: ReactiveFormComponent },

  { path: 'watch', component: WatchesComponent },
  { path: 'watchDetails', component: WatchDetailsComponent, outlet: 'outlet1' },
  { path: 'watchOffers', component: WatchOffersComponent, outlet: 'outlet2' },

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
      { path: 'superLogin', component: LoginComponent },
    ],
  },
  {
    path: 'payment',
    canActivate: [AuthGuard],
    component: ProdPaymentComponent,
  },

  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },

  { path: 'lazy', loadChildren: '../modules/lazy/lazy.module#LazyModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
