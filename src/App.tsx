import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './componets/Header';
import { Product } from './types/Product';
import ProductList from './componets/ProductList';


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL_PRODUCTS + '/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }
    console.log("call");

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='title'>
          <h1>Produtos</h1>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
