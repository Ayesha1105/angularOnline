import { AuthGuard } from './guards/auth.guard';
import { ComService } from './services/com.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './../firebase/firebase-config';

import { SqrtPipe } from './pipes/sqrt.pipe';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductsComponent } from './layout/products/products.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { MobPartsComponent } from './products/mob-parts/mob-parts.component';
import { BooksComponent } from './products/books/books.component';
import { WatchesComponent } from './products/watches/watches.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './modules/app-routing.module';
import { MotoComponent } from './products/mob-parts/moto/moto.component';
import { SamsungComponent } from './products/mob-parts/samsung/samsung.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HomeComponent } from './layout/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './modules/all-material.module';
import { AllComponentModule } from './modules/all-component.module';
import { MobNavComponent } from './products/mob-parts/mob-nav/mob-nav.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LazyModule } from './modules/lazy/lazy.module';
import { ProdPaymentComponent } from './products/prod-payment/prod-payment.component';
import { SuperLoginComponent } from './superAdmin/super-login/super-login.component';
import { HostDirective } from './directives/host.directive';
import { WatchDetailsComponent } from './products/watches/watch-details/watch-details.component';
import { WatchOffersComponent } from './products/watches/watch-offers/watch-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    ProductsComponent,
    NavComponent,
    BannerOneComponent,
    SimpleStyleDirective,
    MobPartsComponent,
    BooksComponent,
    WatchesComponent,
    MotoComponent,
    SamsungComponent,
    PageNotFoundComponent,
    HomeComponent,
    MobNavComponent,
    LoginComponent,
    DashboardComponent,
    ProdPaymentComponent,
    SuperLoginComponent,
    HostDirective,
    WatchDetailsComponent,
    WatchOffersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    AllComponentModule,
    HttpModule,
    LazyModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ComService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
