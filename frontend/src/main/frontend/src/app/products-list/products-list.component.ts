import {Component, Input, OnInit} from '@angular/core';
import {Source} from "../source";
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() source: Source;
  products: Product[];
  selectedProduct: Product;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getProducts(this.source.name).then(products => this.products = products);
  }

  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
