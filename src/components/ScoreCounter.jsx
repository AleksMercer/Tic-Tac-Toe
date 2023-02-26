import React from 'react'

if ( JSON.parse(localStorage.getItem('playersScores')) === null ) {

  localStorage.setItem('playersScores', JSON.stringify([0, 0]))
}

function Counter(props) {

  if (props.winner === props.player) {

    let newScores = JSON.parse(localStorage.getItem('playersScores'))

    let newPlayerScore = newScores[props.playerNum] + 1

    newScores.splice(props.playerNum, 1, newPlayerScore)

    localStorage.setItem('playersScores', JSON.stringify(newScores))
  }

  return (
    <span className='counter'>
      {JSON.parse(localStorage.getItem('playersScores'))[props.playerNum]}
    </span>
  )
}

export default Counter