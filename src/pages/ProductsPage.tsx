import React,  { useEffect, useState } from "react";
import { Product } from '../types/Product';
import ProductList from '../componets/ProductList';

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL_PRODUCTS + '/products');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }

        fetchProducts();
    }, []);
    return (
        <>
            <div className='title'>
                <h1>Produtos</h1>
            </div>
            <ProductList products={products} />
        </>
    )
}

export default ProductsPage;