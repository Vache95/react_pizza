import { Outlet } from 'react-router-dom';
import Header from 'layouts/components/header';

const MainLayout: React.FC = () => (
	<div className='wrapper'>
		<Header />
		<div className='content'>
			<Outlet />
		</div>
	</div>
);

export default MainLayout;
