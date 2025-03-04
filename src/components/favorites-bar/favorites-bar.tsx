'use client';

import { useFavorites } from '@/context/FavoritesContext';
import Button from '@/components/ui/button';
import { useState, useEffect } from 'react';
import './favorites-bar.css';

const FavoritesBar = () => {
  const { favorites, removeFavorite, notification, clearNotification } =
    useFavorites();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [visibleNotification, setVisibleNotification] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (notification) {
      setVisibleNotification(notification);
      setIsClosing(false);
    } else if (visibleNotification && !isClosing) {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setVisibleNotification(null);
        setIsClosing(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [notification, visibleNotification, isClosing]);

  const handleCloseNotification = () => {
    setIsClosing(true);

    setTimeout(() => {
      clearNotification();
    }, 300);
  };

  if (favorites.length === 0 && !visibleNotification) return null;

  return (
    <>
      {visibleNotification && (
        <div
          className={`cartoon-border notification fixed bottom-[112px] right-3 z-50 flex w-80 transform items-center justify-between bg-red-700 px-4 py-4 text-white ${isClosing ? 'notification-close' : ''}`}
        >
          <span>{visibleNotification}</span>
          <button
            onClick={handleCloseNotification}
            className="ml-4 font-bold text-white hover:text-gray-200"
          >
            &times;
          </button>
        </div>
      )}
      <div
        className={`favorites-bar fixed bottom-0 right-0 z-50 w-full transition-all duration-300 md:w-auto`}
      >
        <div className="md:-pr-4 -mt-12 overflow-x-scroll pb-4 pl-4 md:ml-[-52px] md:overflow-visible md:pl-0">
          <div className="scroll-content mt-3 flex min-w-full flex-row justify-center gap-5 px-4">
            {favorites.map((animal) => (
              <div key={animal.id} className="relative">
                <div
                  style={{
                    backgroundImage: `url(${animal.photos[0].small || ''})`,
                  }}
                  className="cartoon-border relative h-20 w-20 rounded bg-cover bg-center"
                >
                  <div className="name absolute bottom-0 rounded-md">
                    <span>{animal.name}</span>
                  </div>
                  <Button
                    onClick={() => removeFavorite(animal.id)}
                    variant="favorite-active"
                    size="sm"
                    className="bo absolute -right-2 -top-2 h-6 w-6"
                  >
                    ❌
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesBar;
