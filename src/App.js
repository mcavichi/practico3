import './App.css';
import Title from './components/Title/Title';
import Game from '../src/components/Game/Game';
import Rules from './components/Rules/Rules';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Rules />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
