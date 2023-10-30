import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import qs from 'qs';
import { MyLoader, PizzaBlock, Categories, Pagination, Search } from 'components';
import { LIST } from 'utils';
import { setCategoryId, seyPageCount, seyFilters } from 'store/slices/filterSlice/filterSlice';
import { selectFilter, selectPizza } from 'store/selector';
import { fetchPizzasThunk } from 'store/slices/pizzaSlice/thunk';

const Home: React.FC = () => {
	const { items, status } = useAppSelector(selectPizza);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		sort: { sortProperty: sortType },
		categoryId,
		pageCount,
		searchValue,
	} = useAppSelector(selectFilter);

	const onClickCategory = (id: number): void => {
		dispatch(setCategoryId(id));
	};
	const pagefunction = (count: number): void => {
		dispatch(seyPageCount(count));
	};

	const pizza = items
		.filter(obj => {
			if (obj.title.toLowerCase().slice(0, searchValue.length) === searchValue.toLocaleLowerCase()) {
				return true;
			}
			return false;
		})
		.map((el, index) => <PizzaBlock {...el} key={index} />);

	const skeletons = [...new Array(6)].map((_, i) => <MyLoader key={i} />);

	useEffect(() => {
		dispatch(
			fetchPizzasThunk({
				pageCount,
				categoryId,
				sortType,
			})
		);
		window.scrollTo(0, 0);
	}, [sortType, categoryId, pageCount, dispatch]);

	useEffect(() => {
		const queryString = qs.stringify({
			sortType,
			categoryId,
			pageCount,
		});
		navigate(`?${queryString}`);
	}, [sortType, categoryId, pageCount, navigate]);

	useEffect(() => {
		if (window.location.search) {
			const params: unknown = qs.parse(window.location.search.substring(1));
			const sort: unknown = LIST.find(
				//@ts-ignore
				obj => obj.sortProperty === params.sortType
			);
			dispatch(
				//@ts-ignore
				seyFilters({ ...params, sort })
			);
		}
	}, [dispatch]);

	return (
		<>
			<div className='container'>
				<Search />
				<div className='content__top'>
					<Categories value={categoryId} onClickCategory={onClickCategory} />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>{status ? skeletons : pizza}</div>
				<Pagination pageCount={pageCount} onChange={pagefunction} />
			</div>
		</>
	);
};

export default Home;
