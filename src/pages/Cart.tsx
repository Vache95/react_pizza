import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { CartEmpty, CartItem } from 'components';
import { clearItems } from 'store/slices/cartSlice/cartSlice';
import { ReactComponent as CartM } from 'assets/icons/cart_m.svg';
import { ReactComponent as TrashM } from 'assets/icons/trash_m.svg';
import { ReactComponent as Arrow } from 'assets/icons/grey-arrow-left.svg';
import { selectCart } from 'store/selector';

const Cart: React.FC = () => {
	const dispach = useAppDispatch();
	const { totalPrice, items } = useAppSelector(selectCart);
	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	const onClickClear = (): void => {
		if (window.confirm('remove cart?')) {
			dispach(clearItems());
		}
	};

	if (!totalPrice) {
		return <CartEmpty />;
	}

	return (
		<div className='container container--cart'>
			<div className='cart'>
				<div className='cart__top'>
					<h2 className='content__title'>
						<CartM />
						Корзина
					</h2>
					<div onClick={onClickClear} className='cart__clear'>
						<TrashM />
						<span>Очистить корзину</span>
					</div>
				</div>
				<div className='content__items'>
					{items.map(item => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
				<div className='cart__bottom'>
					<div className='cart__bottom-details'>
						<span>
							{' '}
							Всего пицц: <b>{totalCount} шт.</b>{' '}
						</span>
						<span>
							{' '}
							Сумма заказа: <b>{totalPrice} ₽</b>{' '}
						</span>
					</div>
					<div className='cart__bottom-buttons'>
						<Link to='/' className='button button--outline button--add go-back-btn'>
							<Arrow />
							<span>Вернуться назад</span>
						</Link>
						<div className='button pay-btn'>
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cart;
