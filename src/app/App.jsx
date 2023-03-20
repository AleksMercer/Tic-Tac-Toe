import React from 'react'
import '../style.css';

import Game from '../game/Game';

function App() {
  return (
    <>
      <h1 className='main-title'>T<span>ic</span> -T<span>ac</span> -T<span>oe</span>!</h1>

      <Game />
      
      <footer>
        <p>•<span> Site designed by</span> <a className='href-name' href="https://github.com/AleksMercer">Mercer</a> © 2023 •</p>
      </footer>
    </>
  )
}

export default App;
