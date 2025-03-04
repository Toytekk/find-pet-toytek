import React from 'react';
import './card.css';
import { useFavorites } from '@/context/FavoritesContext';
import Button from '@/components/ui/button';
import Pet from '@/app/api/pets/pet';

const Card = ({ pet }: { pet: Pet }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const url = pet.photos.length > 0 ? pet.photos[0].medium : '';
  const isFav = isFavorite(pet.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFav) {
      removeFavorite(pet.id);
    } else {
      addFavorite(pet);
    }
  };

  return (
    <div className="card-border cartoon-border card-container relative z-0 m-0 h-[350px] min-h-[300px] overflow-hidden p-0">
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="z-0 h-[350px] bg-cover bg-center"
      ></div>

      <div className="info absolute bottom-0 w-[100%] p-4 pt-12 text-white">
        <div className="flex items-center">
          <Button
            onClick={toggleFavorite}
            variant={isFav ? 'favorite-active' : 'favorite'}
            size="sm"
            className="mr-2 h-8 w-8 flex-shrink-0 rounded-full text-xl"
          >
            {isFav ? '❤️' : '🤍'}
          </Button>
          <h2 className="ml-1 truncate">{pet.name}</h2>
        </div>
        <p className="mt-1">{pet.description}</p>
      </div>
    </div>
  );
};

export default Card;
