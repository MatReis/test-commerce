import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

const RoutesPage: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/carrinho" element={<CartPage />} />
            </Routes>
        </>
    )
}

export default RoutesPage;