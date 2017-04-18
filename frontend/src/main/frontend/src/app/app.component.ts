import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service'
import {Source} from "./source";
import {SourcesService} from "./sources.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedProduct: Product;
  products: Product[];

  sources: Source[];
  selectedSource: Source;

  constructor(private productsService: ProductsService, private sourcesService: SourcesService) {}

  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onSourceSelect(source: Source): void {
    this.selectedSource = source;
    this.getProducts();
  }

  getProducts(): void {
    if (this.selectedSource) {
      this.productsService.getProducts(this.selectedSource.name).then(products => this.products = products);
    }
  }

  ngOnInit(): void {
    this.sourcesService.getSources().then(sources => this.sources = sources);
  }
}
