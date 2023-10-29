import { useAppDispatch } from 'hooks';
import { addItem, minusItem, removeItem } from 'store/slices/cartSlice/cartSlice';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Minus } from 'assets/icons/minus.svg';
import { ReactComponent as Remove } from 'assets/icons/remove.svg';
import { ICartItemProps } from './types';

const CartItem: React.FC<ICartItemProps> = ({ id, title, type, size, price, count, imageUrl }) => {
	const dispach = useAppDispatch();

	const onClickPlus = (): void => {
		dispach(addItem({ id } as ICartItemProps));
	};
	const onClickMinus = (): void => {
		dispach(minusItem(id));
	};
	const onClickRemove = (): void => {
		if (window.confirm('Are you sure you want to remove?')) {
			dispach(removeItem(id));
		}
	};

	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
			</div>
			<div className='cart__item-info'>
				<h3>{title}</h3>
				<p>
					{type}, {size} см.
				</p>
			</div>
			<div className='cart__item-count'>
				<button disabled={count === 1} onClick={onClickMinus} className='button button--outline button--circle cart__item-count-minus'>
					<Minus />
				</button>
				<b>{count}</b>
				<div onClick={onClickPlus} className='button button--outline button--circle cart__item-count-plus'>
					<Plus />
				</div>
			</div>
			<div className='cart__item-price'>
				<b>{price * count} ₽</b>
			</div>
			<div className='cart__item-remove'>
				<div onClick={onClickRemove} className='button button--outline button--circle'>
					<Remove />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
