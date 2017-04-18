import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService]
})
export class AppComponent implements OnInit {
  selectedProduct: Product;
  products: Product[];

  constructor(private productsService: ProductsService) {}

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productsService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
