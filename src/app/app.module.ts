import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleProductComponent } from './component/google-product/google-product.component';
import { GproductComponent } from './component/google-product/gproduct/gproduct.component';
import { ProductCardComponent } from './component/google-product/product-card/product-card.component';
import { Iproduct } from './shared/model/data';

const appRoute:Routes=[
  {path:'', redirectTo : 'products',pathMatch : 'full'},
  {path:'products', component: GoogleProductComponent},
  {path:'products/:name', component: GproductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GoogleProductComponent,
    GproductComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
