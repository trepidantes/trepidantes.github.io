import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  console.log("APP", process.env.REACT_APP_URL);
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Trepidantes <code>on construction</code> v0.0.1
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
    </BrowserRouter>
  );
}

export default App;
