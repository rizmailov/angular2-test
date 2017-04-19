import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from './products.service'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import {SourcesService} from "./sources.service";
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ ProductsService, SourcesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
