import './styles/App.css';
import Header from './Components/Header';
import Introducao from './Components/Introducao';
import Portfolio from './Components/Portfolio';
import Habilidades from './Components/Habilidades';
import Contato from './Components/Contato';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introducao/>
      <Portfolio/>
      <Habilidades/>
      <Contato/>
    </div>
  );
}

export default App;
