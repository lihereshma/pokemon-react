import React from 'react'

export default function Pokemon({ name, id }) {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <h2>{ name }</h2>
      <h3>#{ id }</h3>
      <img src={ `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${ id }.svg` } loading="lazy" alt={ name } />
    </li>
  )
}
