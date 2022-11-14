import Categories from './components/categories';
import Header from './components/header';
import PizzaBlock from './components/pizzaBlock';
import Sort from './components/sort';
import pizzaData from './assets/pizza.json';
import './scss/app.scss';

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {pizzaData.map((e) => (
                <PizzaBlock {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
