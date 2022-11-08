import React from 'react'
import { useState } from 'react'
import Estatus from './components/Estatus'
import Posteos from './components/Posteos'
function App() {

	const [likes, setLikes] = useState(0)

	const aumentarLikes = () => {
		setLikes(likes + 1)
	}

  return (
    <div className="App">
        <Estatus likes={likes} />
				<Posteos aumentarLikes={aumentarLikes} />
    </div>
  );
}

export default App;
