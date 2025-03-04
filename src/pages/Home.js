import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            <code onClick={() => navigate('/onboarding')}>on construction</code> v0.0.3
            </p>
            <a
            className="text-4xl text-blue-500 font-bold italic underline"
            href="https://trepidantes.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Go to Trepidantes
            </a>
        </header>
    </div>
  );
};
