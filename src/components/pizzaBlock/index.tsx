import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addItem } from 'store/slices/cartSlice/cartSlice';
import { IPizzaBlockProps } from './types';
import { CartItem } from 'store/types';
import { TYPES_NAME } from 'utils';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';

const PizzaBlock: React.FC<IPizzaBlockProps> = ({ title, price, imageUrl, sizes, types, id }) => {
	const [active, setactive] = useState<number>(0);
	const [activePizza, setactivePizza] = useState<number>(0);
	const dispatch = useAppDispatch();
	const cartItem = useAppSelector(state => state.cart.items.find((obj: any) => obj.id === id));

	const addedCount: number = cartItem ? cartItem.count : 0;

	const addClick = (): void => {
		const item: CartItem = {
			id,
			title,
			price,
			imageUrl,
			type: TYPES_NAME[active],
			size: sizes[activePizza],
			count: 0,
		};
		dispatch(addItem(item));
	};

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<Link to={`/pizza/${id}`}>
					{' '}
					<img className='pizza-block__image' src={imageUrl} alt='Pizza' />{' '}
				</Link>
				<h4 className='pizza-block__title'>{title}</h4>
				<div className='pizza-block__selector'>
					<ul>
						{types?.map((e, i) => (
							<li className={activePizza === i ? 'active' : ''} onClick={() => setactivePizza(i)} key={i}>
								{TYPES_NAME[e]}
							</li>
						))}
					</ul>
					<ul>
						{sizes?.map((e, i) => (
							<li className={active === i ? 'active' : ''} onClick={() => setactive(i)} key={i}>
								{e} см.
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>от ${price} ₽</div>
					<div onClick={addClick} className='button button--outline button--add'>
						<Plus />
						<span>Добавить</span>
						{addedCount > 0 && <i>{addedCount}</i>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PizzaBlock;
