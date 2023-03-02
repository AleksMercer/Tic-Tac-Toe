import React from 'react'
import '../style.css';

function Square(props) {
  return (
    <button className={props.class} onClick={props.onClick}>{props.value}</button>
  )
}

export default Square