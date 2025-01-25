import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

let basename = document.querySelector('base')?.getAttribute('href') ?? '/';
if (basename === '' || basename === ' ') {
  basename = '/';
}

function App() {
  console.log("PUBLIC_URL", process.env.PUBLIC_URL);
  console.log("REACT_APP_URL", process.env.REACT_APP_URL);
  console.log("REACT_APP_PUBLIC_URL", process.env.REACT_APP_PUBLIC_URL);
  console.log("basename", basename);
  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Trepidantes <code>on construction</code> v0.0.2
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
