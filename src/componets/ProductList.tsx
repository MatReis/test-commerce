// ProductList.tsx
import React from 'react';
import Card from './Card';
import { Product } from '../types/Product';
import '../utils/Utils.css'
import './ProductList.css'

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <div className='list-products responsive-wrapper'>
          {products.map(product => (
            <Card product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
