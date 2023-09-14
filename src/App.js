import './App.css';
import Titulo from '../src/components/Titulo/Titulo';
import Game from '../src/components/Game/Game';
import Reglas from '../src/components/Reglas/Reglas';

function App() {
  return (
    <div className="App">
      <Titulo />
      <Reglas />
      <Game />
    </div>
  );
}

export default App;
