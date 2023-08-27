import { Product } from "./Product";

export interface Cart {
    items: CartItem[];
}

export interface CartItem {
    product: Product;
    quantity: number;
}
  