import { Product } from "./Product";

export interface Cart {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
  