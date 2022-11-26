import React from 'react';
import { useEffect, useState } from 'react';
import MyLoader from '../components/pizzaBlock/components/skeleton';
import PizzaBlock from '../components/pizzaBlock';
import Sort from '../components/sort';
import Categories from '../components/categories';

const Home = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://63767cd7b5f0e1eb850d1867.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItem(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="container">
        <div class="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          {isLoading
            ? [...new Array(6)].map((_, i) => <MyLoader key={i} />)
            : item.map((e, i) => <PizzaBlock {...e} key={i} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
