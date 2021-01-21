import logo from './logo.svg';
import './App.css';
import Fcomponent from'./components/Fcomponent';
import Ccomponent from './components/Ccomponent';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://vk.com/maks_winter"
          target="_blank"
          rel="noreferrer"
        >
          Моя страница ВКонтакте
        </a>
      </header>
    </div>
  );
}

export default App;
