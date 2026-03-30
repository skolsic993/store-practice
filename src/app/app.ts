import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductApiService } from './core/service/product-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly #productService = inject(ProductApiService);

  products = this.#productService.getProducts();
}
