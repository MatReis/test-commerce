import React from "react";
import { Route, Routes} from 'react-router-dom';

import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import ProductPage from "./ProductPage";

const RoutesPage: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/produto/:productId" element={<ProductPage />} />
            </Routes>
        </>
    )
}

export default RoutesPage;