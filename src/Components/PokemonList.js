import React from 'react'
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon, count }) {
  return (
    <div className="container-fluid">
      <ul>
        { pokemon.map((p, i) => {
          return (
            <Pokemon key={ i } name={ p.name } id={ (count * 50) + (i + 1) }/>
          )})
        }
      </ul>
    </div>
  )
}