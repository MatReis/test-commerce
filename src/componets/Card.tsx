import React from 'react';
import { Button } from '@mui/material';
import { AddShoppingCart, FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import './Card.css'
import { formatCurrency } from "../utils/utils";
import { Product } from "../types/Product";
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from "../contexts/CartContext";


interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    const {id, title, price, discountPercentage, brand, rating, stock, thumbnail} = product;
    const realPrice: number = price - ((price/100) * discountPercentage);
    
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const { addToCart } = useCart();

    return (
        <>
            <div className="card">
                <div className="image">
                    <img src={thumbnail} alt="imagem do produto" />
                </div>
                <div className="description">
                    <div className="info">
                        <div className="info-title">
                            <Link to={`/produto/${id}`} >{title}</Link>
                        </div>
                        <div className="info-price">
                            <span><s>{formatCurrency(price)}</s></span>
                            <span>{formatCurrency(realPrice)}</span>
                        </div>
                    </div>
                    <div className="subinfo">
                        <label>Marca: <span>{brand}</span></label>
                        <label>Rating: <span>{rating}</span></label>
                        <label>Quantidade em estoque: <span>{stock}</span></label>
                    </div>
                </div>
                <div className="actions">
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<AddShoppingCart />}
                        onClick={() => addToCart(product)}
                        >
                        Adicionar ao Carrinho
                    </Button>
                    {isFavorite(product.id) ? (
                        <Button
                            startIcon={<FavoriteOutlined className="favorite-color" />} 
                            onClick={() => removeFavorite(product.id)}>
                        </Button>
                    ) : (
                        <Button
                            startIcon={<FavoriteBorderOutlined className="favorite-color" />} 
                            onClick={() => addFavorite(product)}>
                        </Button>
                    )}
                </div>

            </div>
        </>
    )
}

export default Card;