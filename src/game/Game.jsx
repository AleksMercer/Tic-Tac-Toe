import React, { useState } from 'react'
import { calculateWinner } from '../components/Winner'
import Board from '../board/Board'
import './game.css'

function Game() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xturn, setXturn] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (index) => {

    const cloneBoard = [...board]

    if( cloneBoard[index] || winner ) return

    cloneBoard[index] = xturn ? '🞪' : '⭘'

    setBoard(cloneBoard)
    setXturn(!xturn)
  }

  const newGame = () => {

    return (
      <button className='newGame' onClick={ () => { setBoard(Array(9).fill(null)); setXturn(true) } }>New game</button>
    )
  }

  return (
    
    <div className='game'>

      <div className="score">

        <h2 className='winAndTurn'>{ winner ? 'Winner : ' + winner : 'Next turn : ' + (xturn ? '🞪' : '⭘')}</h2>
      </div>

      <Board squares={board} click={handleClick} />
      
      <div className="buttons">
        { newGame() }
      </div>
    </div>
  )
}

export default Game