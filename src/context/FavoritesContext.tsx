'use client';

import Pet from '@/app/api/pets/pet';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface FavoritesContextType {
  favorites: Pet[];
  addFavorite: (animal: Pet) => void;
  removeFavorite: (animalId: number) => void;
  isFavorite: (animalId: number) => boolean;
  notification: string | null;
  clearNotification: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Pet[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const MAX_FAVORITES = 6;

  // Auto-clear notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const addFavorite = (animal: Pet) => {
    if (favorites.some((fav) => fav.id === animal.id)) return;

    if (favorites.length >= MAX_FAVORITES) {
      setNotification(
        `You can only have ${MAX_FAVORITES} favorite pets. Please remove one before adding more.`
      );
      return;
    }

    setFavorites((prev) => [...prev, animal]);
  };

  const removeFavorite = (animalId: number) => {
    setFavorites((prev) => prev.filter((animal) => animal.id !== animalId));
  };

  const isFavorite = (animalId: number) => {
    return favorites.some((animal) => animal.id === animalId);
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        notification,
        clearNotification,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
