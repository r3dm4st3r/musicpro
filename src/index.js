import './assets/css/tailwind.css';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

const AutoTop = lazy(() => import('./components/common/AutoTop'));
const Application = lazy(() => import('./Application'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Suspense fallback={'Loading...'}>
						<AutoTop />
					</Suspense>
					<Suspense fallback={'Loading...'}>
						<Application />
					</Suspense>
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
