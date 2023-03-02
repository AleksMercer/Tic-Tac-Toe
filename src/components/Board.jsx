import React from 'react'
import '../style.css';

import Square from './Square'


function Board( {squares, click, winArray} ) {

  let squareClass = '';

  const invertOrNot = (i) => {

    if( winArray && winArray.includes(i) ) {
      return squareClass = 'square-invert'
    } else {
      return squareClass = 'square'
    }
  }

  return (
    <div className='game__board'>
      {
        squares.map( (square, i) => {
          invertOrNot(i)
          return <Square class={squareClass} value={square} onClick={() => click(i)} key={i} />
        })
      }
    </div>
  )
}

export default Board