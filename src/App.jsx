import './App.css';
import Game from './game/Game';

function App() {
  return (
    <>
      <h1 className='main-title'>Tic -Tac -Toe!</h1>
      <Game />
      <footer>
        <p>• Part of the logic is taken from the <a className='href-name' href="https://reactjs.org/tutorial/tutorial.html"> official site of React </a>, but now without classes and using functional components with hooks •</p>
        <p>•<span> Site designed by</span><a className='href-name' href="https://github.com/AleksMercer"> Mercer </a>© 2023 •</p>
      </footer>
    </>
  )
}

export default App;
