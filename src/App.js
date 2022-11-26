import Header from './components/header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <div class="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
