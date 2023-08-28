import './styles/App.css';
import Header from './Components/Header';
import Introducao from './Components/Introducao';
import Portfolio from './Components/Portfolio';
import Habilidades from './Components/Habilidades';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introducao/>
      <Portfolio/>
      <Habilidades/>
    </div>
  );
}

export default App;
