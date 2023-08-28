import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Product } from '../types/Product';

interface FavoritesContextData {
  favorites: Product[];
  addFavorite: (favorite: Product) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextData | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addFavorite = (favorite: Product) => {
    setFavorites(prevFavorites => [...prevFavorites, favorite]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some(favorite => favorite.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
