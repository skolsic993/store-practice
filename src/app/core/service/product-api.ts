import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { z } from 'zod';

const ProductSchema = z.object({
  id: z.number().int().nonnegative(),
  title: z.string().min(1),
  price: z.number().positive(),
  description: z.string().min(1),
  category: z.string().min(1),
  image: z.string(),
});

type Product = z.infer<typeof ProductSchema>;

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  getProducts(): HttpResourceRef<Product | undefined> {
    return httpResource(() => ({
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
    }));
  }
}
