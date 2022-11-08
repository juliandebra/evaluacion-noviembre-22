import React from 'react'
import { useState } from 'react'
export default function Post(props) {

	const [likes, setLikes] = useState(props.post.likes)

	const handleClick = () => {
		setLikes(likes + 1)
		props.aumentarLikes()
		console.log("El posteo que sumó un like fue: " + props.post.titulo);
	}

  return (
    <div className='posteo'>
      <h3>{props.post.titulo}</h3>
			<p>{props.post.texto}</p>
			<button onClick={handleClick}>Like</button>
			<h5>{likes <= 10 ? likes : "Más de 10 likes"}</h5>
    </div>
  )
}
