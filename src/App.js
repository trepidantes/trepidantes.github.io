import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/common/layout/Layout';
import { Home } from './pages/Home';
import { Onboarding } from './pages/Onboarding';

let basename = document.querySelector('base')?.getAttribute('href') ?? '/';
if (basename === '' || basename === ' ') {
  basename = '/';
}

function App() {
  console.log("PUBLIC_URL", process.env.PUBLIC_URL);
  console.log("REACT_APP_URL", process.env.REACT_APP_URL);
  console.log("REACT_APP_PUBLIC_URL", process.env.REACT_APP_PUBLIC_URL);
  console.log("REACT_APP_TEST", process.env.REACT_APP_TEST);
  console.log("basename", basename);
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
