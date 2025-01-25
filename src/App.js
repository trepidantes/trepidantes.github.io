import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trepidantes <code>on construction</code>
        </p>
        <a
          className="App-link"
          href="https://trepidantes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Trepidantes
        </a>
      </header>
    </div>
  );
}

export default App;
