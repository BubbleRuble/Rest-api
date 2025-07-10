import { useState, useEffect } from 'react';
import PokemonDataView from './DataView';
import PokemonErrorView from './ErrorView';
import PokemonPendingView from './PendingView';
import PokemonAPI from './API';

export default function Info({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
      if (!pokemonName) {
          return;
        }

      PokemonAPI
        .fetchPokemon(pokemonName)
        .then(pokemon => {
          setPokemon(pokemon);
          setStatus('resolved');
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }, [pokemonName]);

  if (status === 'idle') {
    return <div>Введіть ім'я покемона</div>;
  }

  if (status === 'pending') {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }

  return <div></div>;
}
