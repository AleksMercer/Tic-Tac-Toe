import React from 'react'
import '../style.css';

import Square from './Square'


function Board({squares, click}) {
  return (
    <div className='game__board'>
      {
        squares.map( (square, i) => (
          <Square  key={i} value={square} onClick={() => click(i)} />
        ))
      }
    </div>
  )
}

export default Board