import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from '../Components/Pokemons/Form';
import PokemonInfo from '../Components/Pokemons/Info';

export default function PokemonView() {
  const [ pokemonName, setPokemonName ] = useState('');


  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}


