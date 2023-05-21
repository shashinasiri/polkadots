import './App.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route path='/hats' Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
