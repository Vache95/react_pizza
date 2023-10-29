import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, FullPizza } from 'pages';
import MainLayout from '../layouts/MainLayout';
import { HOME, CART, PIZZA, NOTH_FOUND } from 'utils';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ '../pages/Cart'));

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={HOME} element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route
					path={CART}
					element={
						<Suspense fallback={<div>loading...</div>}>
							<Cart />
						</Suspense>
					}
				/>
				<Route path={PIZZA} element={<FullPizza />} />
			</Route>
			<Route path={NOTH_FOUND} element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
