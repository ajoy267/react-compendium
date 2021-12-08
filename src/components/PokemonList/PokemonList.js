import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((pokes) => (
        <p key={pokes.id}>
          {pokes.pokemon}
          {pokes.type}
        </p>
      ))}
    </div>
  );
}
