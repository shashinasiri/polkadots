import './App.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route path='/shop' Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
