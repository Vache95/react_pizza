import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectCart } from 'store/selector';
import Logo from 'assets/icons/pizza-logo.svg';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';

const Header: React.FC = () => {
	const { items, totalPrice } = useAppSelector(selectCart);
	const totalCount = items.reduce((sum, item) => sum + item.count, 0);
	const { pathname } = useLocation();

	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img width='38' src={Logo} alt='Pizza logo' />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<div className='header__cart'>
					{pathname !== '/cart' && (
						<Link to='/cart'>
							<a href='/cart.html' className='button button--cart'>
								<span>{totalPrice} ₽</span>
								<div className='button__delimiter' />
								<Cart />
								<span>{totalCount}</span>
							</a>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
export default Header;
