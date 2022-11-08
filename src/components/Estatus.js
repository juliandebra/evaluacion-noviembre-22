import React from 'react'
export default function Estatus(props) {
  
  return (
    <header>
        <h1>Estatus de Posteos</h1>
        <p>Likes totales:<span>{props.likes}</span></p>
    </header>
  )
}
