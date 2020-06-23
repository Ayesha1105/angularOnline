import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: 'mobile', component: MobPartsComponent },
  { path: 'book', component: BooksComponent },
  { path: 'watch', component: WatchesComponent },
];

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
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
