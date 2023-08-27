// ProductList.tsx
import React from 'react';
import Card from './Card';
import { Product } from '../types/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
        <div>
            {products.map(product => (
                <Card product={product} />
            ))}
        </div>
    </>
  );
};

export default ProductList;
