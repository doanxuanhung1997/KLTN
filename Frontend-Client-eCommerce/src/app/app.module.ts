import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { SlideComponent } from './components/slide/slide.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageCategoryComponent } from './components/page-category/page-category.component';
import { PageProductDetailComponent } from './components/page-product-detail/page-product-detail.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageCheckoutComponent } from './components/page-checkout/page-checkout.component';
import { PageCartComponent } from './components/page-cart/page-cart.component';

import {HttpClientModule} from '@angular/common/http';
import { SaleProductsComponent } from './components/page-home/sale-products/sale-products.component';
import { NewProductsComponent } from './components/page-home/new-products/new-products.component';
import { PageSaleProductsComponent } from './components/page-sale-products/page-sale-products.component';
import { PageNewProductsComponent } from './components/page-new-products/page-new-products.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { PageSearchComponent } from './components/page-search/page-search.component';
import { CheckoutCompleteComponent } from './components/checkout-complete/checkout-complete.component';
import { PageNewsComponent } from './components/page-news/page-news.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuMainComponent,
    MenuCategoriesComponent,
    SlideComponent,
    PageHomeComponent,
    PageCategoryComponent,
    PageProductDetailComponent,
    PageContactComponent,
    PageAboutComponent,
    PageCheckoutComponent,
    PageCartComponent,
    SaleProductsComponent,
    NewProductsComponent,
    PageSaleProductsComponent,
    PageNewProductsComponent,
    FormSearchComponent,
    PageSearchComponent,
    CheckoutCompleteComponent,
    PageNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
