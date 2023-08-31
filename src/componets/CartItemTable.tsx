import React from "react"
import styled from "styled-components";
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { CartItem } from "../types/Cart";
import { formatCurrency } from "../utils/utils";
import { useCart } from "../contexts/CartContext"
import { Product } from "../types/Product";

interface divImageProps {
    divImageUrl: string
}

const CartItemTable: React.FC<CartItem>= ({ product, quantity }) => {
    const { id, price, title, discountPercentage, thumbnail} = product
    const realPrice: number = price - ((price/100) * discountPercentage);
    const sumValue: number = realPrice * quantity;

    const DivImage = styled.div<divImageProps>`
        background-image: url(${props => props.divImageUrl});;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    `;

    const {updateQuantity, removeFromCart } = useCart();

    const handlerRemove = (id: number) => {
        removeFromCart(id)
    }

    return (
        <div className="table-grid-content">
            <div className="table-row">
                <div>
                    <DivImage divImageUrl={thumbnail}>
                    </DivImage>
                </div>
                <div>{title}</div>
                <div>
                    <div>
                        <IconButton 
                            aria-label="Remover 1" 
                            size="small" 
                            onClick={ () => updateQuantity( id, (quantity - 1) ) }
                        >
                            <RemoveIcon />
                        </IconButton >
                        <span>{quantity}</span>
                        <IconButton 
                            aria-label="Adicionar" 
                            size="small"  
                            onClick={ () => updateQuantity( id, (quantity + 1) ) }
                        ><AddIcon /></IconButton >
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            color="error" 
                            startIcon={<DeleteIcon />}
                            onClick={ () => handlerRemove(id) }
                        >
                            Remove
                        </Button>
                    </div>
                </div>
                <div>{formatCurrency(realPrice)}</div>
                <div>{formatCurrency(sumValue)}</div>
            </div>
        </div>
    )
}

export default CartItemTable;