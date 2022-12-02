import { AUTH_ROUTES, DASHBOARD_ROUTES, GENERAL_ROUTES } from './routes/routes';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NotFound from './components/error/NotFound';

// Importing layouts
const MasterLayout = lazy(() => import('./layouts/Master'));
const GeneralLayout = lazy(() => import('./layouts/General'));
const AuthLayout = lazy(() => import('./layouts/Auth'));
const DashboardLayout = lazy(() => import('./layouts/Dashboard'));

function Application() {
	return (
		<Routes>
			<Route
				element={
					<Suspense fallback={''}>
						<MasterLayout />
					</Suspense>
				}
			>
				{/* Authentication Routes */}
				<Route
					element={
						<Suspense fallback={''}>
							<AuthLayout />
						</Suspense>
					}
				>
					{AUTH_ROUTES.map((routeItem, routeIndex) => {
						return (
							<Route
								key={routeIndex}
								path={routeItem.path}
								element={routeItem.component}
							/>
						);
					})}
				</Route>

				{/* General Routes (Public face) */}
				<Route
					element={
						<Suspense fallback={''}>
							<GeneralLayout />
						</Suspense>
					}
				>
					{GENERAL_ROUTES.map((routeItem, routeIndex) => {
						return (
							<Route
								key={routeIndex}
								path={routeItem.path}
								element={routeItem.component}
							/>
						);
					})}
				</Route>

				{/* Protected Routes (Only Authenticated Users) */}
				<Route
					element={
						<Suspense fallback={''}>
							<DashboardLayout />
						</Suspense>
					}
				>
					{DASHBOARD_ROUTES.map((routeItem, routeIndex) => {
						return (
							<Route
								key={routeIndex}
								path={routeItem.path}
								element={routeItem.component}
							/>
						);
					})}
				</Route>

				{/* Global Not found */}
				<Route
					path="*"
					element={
						<Suspense fallback={''}>
							<NotFound />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
}

export default Application;
