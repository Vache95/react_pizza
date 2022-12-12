import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// import Header from './components/header';
// import Home from './pages/Home';
// import { Routes, Route } from 'react-router-dom';
// import './scss/app.scss';
// import NotFound from './pages/NotFound';
// import Cart from './pages/Cart';
// import { createContext, useState } from 'react';

// export const SearchContext = createContext('');

// function App() {
//   const [searchValue, setSearchValue] = useState('');
//   return (
//     <>
//       <div className="wrapper">
//         <SearchContext.Provider value={{ searchValue, setSearchValue }}>
//           <Header />
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </SearchContext.Provider>
//       </div>
//     </>
//   );
// }

// export default App;
