import React from 'react'
import listaPosts from './data.json'
import Post from './Post'
export default function Posteos(props) {
  return (
    <div className='container'>
      {
        listaPosts.map(item => {
            return <Post key={item.id} post={item} aumentarLikes={props.aumentarLikes} />
        })
      }
    </div>
  )
}