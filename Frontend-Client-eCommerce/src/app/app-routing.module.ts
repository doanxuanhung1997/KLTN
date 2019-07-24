import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageCategoryComponent } from './components/page-category/page-category.component';
import { PageProductDetailComponent } from './components/page-product-detail/page-product-detail.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageCheckoutComponent } from './components/page-checkout/page-checkout.component';
import { PageCartComponent } from './components/page-cart/page-cart.component';
import { PageSaleProductsComponent } from './components/page-sale-products/page-sale-products.component';
import { PageNewProductsComponent } from './components/page-new-products/page-new-products.component';
import { CheckoutCompleteComponent } from './components/checkout-complete/checkout-complete.component';
import { PageSearchComponent } from './components/page-search/page-search.component';
import { PageNewsComponent } from './components/page-news/page-news.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageCompareComponent } from './components/page-compare/page-compare.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'category/:id', component: PageCategoryComponent },
  { path: 'category/:id/:idSear', component: PageCategoryComponent },
  { path: 'compare/:id1/:id2', component: PageCompareComponent },
  { path: 'product/:id', component: PageProductDetailComponent },
  { path: 'search/:name', component: PageSearchComponent },
  { path: 'sale-products', component: PageSaleProductsComponent },
  { path: 'new-products', component: PageNewProductsComponent },
  { path: 'checkout', component: PageCheckoutComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'news', component: PageNewsComponent },
  { path: 'complete', component: CheckoutCompleteComponent },
  { path: 'checkout', component: PageCheckoutComponent },
  { path: 'cart', component: PageCartComponent },
  { path: 'cart/:id/:option_color', component: PageCartComponent }
  //{path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
