import { Product } from "../types/Product";
import './Card.css'
import { formatCurrency } from "../utils/utils";
import { Button } from '@mui/material';
import { AddShoppingCart, FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { useFavorites } from '../contexts/FavoritesContext'; 

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    const { title, price, discountPercentage, brand, rating, stock, images} = product;
    const realPrice: number = price - ((price/100) * discountPercentage);
    
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    return (
        <>
            <div className="card">
                <div className="image">
                    <img src={images[0]} />
                </div>
                <div className="description">
                    <div className="info">
                        <div className="info-title">
                            <h2>{title}</h2>
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
                    {/* <a className="Details" href={'/detalhes/'+id} > Ver mais </a> */}
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddShoppingCart />}
                        // onClick={handleAddClick}
                        >
                        Adicionar ao Carrinho
                    </Button>
                    {/* <a className="addToCart">Adiconar ao carrinho</a> */}
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