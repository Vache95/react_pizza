import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import MyLoader from '../components/pizzaBlock/components/skeleton';
import PizzaBlock from '../components/pizzaBlock';
import Sort from '../components/sort';
import Categories from '../components/categories';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, seyPageCount, seyFilters } from '../store/slices/filterSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { list } from '../components/sort';
import axios from 'axios';

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const pageCount = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();
  const { searchValue } = useContext(SearchContext);
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const pagefunction = (count) => {
    dispatch(seyPageCount(count));
  };
  
  const pizza = item
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      return false;
    })
    .map((e, i) => <PizzaBlock {...e} key={i} />);

  const skeletons = [...new Array(6)].map((_, i) => <MyLoader key={i} />);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://63767cd7b5f0e1eb850d1867.mockapi.io/items?page=${pageCount}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType}&order=desc`,
      )
      .then((res) => {
        setItem(res.data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0);
  }, [sortType, categoryId, pageCount]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      pageCount,
    });
    navigate(`?${queryString}`);
  }, [sortType, categoryId, pageCount]);
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortList = list.find((obj) => obj.sortProperty === params.sortType);

      dispatch(seyFilters({ ...params, sortList }));
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizza}</div>
        <Pagination pageCount={pageCount} onChange={pagefunction} />
      </div>
    </>
  );
};

export default Home;
