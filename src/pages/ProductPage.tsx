import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { Product } from "../types/Product";

const ProductPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product| null>(null);

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

    return (
        <>
            <div className="title">
                <h1>Produto</h1>
            </div>
            <div className="product-details">
                product: {product.title}
            </div>
        </>
    )
}

export default ProductPage;