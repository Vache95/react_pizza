import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import 'styles/styles.scss';

const rootElem = document.getElementById('root');

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);

	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<Routers>
					<App />
				</Routers>
			</Provider>
		</React.StrictMode>
	);
}
