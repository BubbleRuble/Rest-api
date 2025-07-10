import {useState, useEffect}from 'react';
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify';

export default function Form ({onSubmit}) {
   const [ pokemonName, setPokemonName ] = useState('');

   const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase())
   }

  const handleSubmit = e => {
    e.preventDefault()

    if (pokemonName.trim() === '') {
      toast.error("Введіть ім'я покемона")
      return;
    }
    
    onSubmit(pokemonName)
    setPokemonName('')
  }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Знайти
        </button>
      </form>
    )
}