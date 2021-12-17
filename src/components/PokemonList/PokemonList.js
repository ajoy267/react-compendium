import React from 'react';
import { Button } from '@mui/material';

export default function PokemonList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const nextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div>
      {pokemon.map((pokes) => (
        <p key={pokes.id}>
          {pokes.pokemon}
          {pokes.type}
        </p>
      ))}
      <div>Page: {currentPage}</div>
      <Button variant="outlined" className="button" onClick={nextPage}>
        Next Page
      </Button>
    </div>
  );
}
