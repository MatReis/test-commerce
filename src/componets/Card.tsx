import { Product } from "../types/Product";

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
    const {id,  title, price, discountPercentage, brand, rating, stock} = product;
    const realPrice: Number = price - ((price/100) * discountPercentage);

    return (
        <>
            <div className="card">
                <div>imagens</div>
                <div className="description">
                    <div>
                        <h2>{title}</h2>
                        <span><s>{price}</s></span>
                        <span>{realPrice.toString()}</span>
                    </div>
                    <div>
                        <span>{brand}</span>
                        <span>{rating}</span>
                        <span>{stock}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="addToCart" >Addiconar ao carrinho</button>
                    <button className="Favorite"> Favoritar </button>
                    <a className="Details" href={'/detalhes/'+id} > Ver mais </a>
                </div>

            </div>
        </>
    )
}

export default Card;