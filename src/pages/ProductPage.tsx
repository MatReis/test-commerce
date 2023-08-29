import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { AddShoppingCart, FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';

import { Product } from "../types/Product";
import '../utils/utils'
import './ProductPage.css'
import { formatCurrency } from "../utils/utils";
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from "../contexts/CartContext";

const ProductPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product| null>(null);
    
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const { addToCart } = useCart();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL_PRODUCTS + '/products/'+ productId);
                const data = await response.json();
    
                setProduct(data)
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }
        
        fetchProduct()
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const {title, price, description} = product

    return (
        <>
            <div className="product-details responsive-wrapper">
                <div className="product-image">
                    <img src={product.images[0]} alt="imagem produto" />
                </div>
                <div className="product-info"> 
                    <div className="product-price">
                        {formatCurrency(price)}
                    </div>
                    <div className="product-description">
                        <div className="product-description-title">
                            {title}
                        </div>
                        <div className="product-description-text">
                            {description}
                        </div>
                    </div>
                    <div className="product-action">
                        <Button
                            variant="contained"
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
            </div>
        </>
    )
}

export default ProductPage;