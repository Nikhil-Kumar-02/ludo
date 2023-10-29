import './App.css';
import Board from './board.js';
import background from './img/background3.png'

function App() {
  return (
    <div className="App">
      <img src={background} className='background' alt='bodybackground'></img>
      <Board></Board>
    </div>
  );
}

export default App;
