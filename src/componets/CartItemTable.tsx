import React from "react"

import { CartItem } from "../types/Cart";
import { formatCurrency } from "../utils/utils";
// import { updateQuantity, removeFromCart } from "../contexts/CartContext"


const CartItemTable: React.FC<CartItem>= ({ product, quantity }) => {
    const { price, title, discountPercentage, thumbnail} = product
    const realPrice: number = price - ((price/100) * discountPercentage);
    const sumValue: number = realPrice * quantity;

    return (
        <div className="table-grid-content">
            <div>
                <img src={thumbnail} alt='thumbnail' />
            </div>
            <div >{title}</div>
            <div >
                <button></button>
                {quantity}
                <button></button>
            </div>
            <div >{formatCurrency(realPrice)}</div>
            <div >{formatCurrency(sumValue)}</div>
        </div>
    )
}

export default CartItemTable;