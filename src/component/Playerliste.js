import React from 'react'
import player from "../Players"
import Player from './Player'

function Playerliste() {
  return (
    <div className='car'>
     {player.map((el)=><Player el={el} />)} 
    </div>
  )
}

export default Playerliste
