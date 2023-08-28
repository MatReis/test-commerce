import Header from './componets/Header';

import './App.css';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import RoutesPage from './pages/RoutesPage';
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <CartProvider>
    <FavoritesProvider>
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='container'>
          <RoutesPage/>
        </div>
      </div>
    </BrowserRouter>
    </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
