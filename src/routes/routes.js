import { lazy, Suspense } from 'react';
import { AUTH_BASE_ROUTES, DASHBOARD_BASE_ROUTES, GENERAL_BASE_ROUTES } from './baseRoutes';
import { Icon } from '@iconify/react';

// Import Auth Routes
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage'));

// Import General Routes
const HomePage = lazy(() => import('../pages/general/home/HomePage'));
const SearchPage = lazy(() => import('../pages/general/search/SearchPage'));

// Import Dashboard Routes
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));

// Authentication Routes
export const AUTH_ROUTES = [
	{
		path: AUTH_BASE_ROUTES.LOGIN,
		component: (
			<Suspense fallback={''}>
				<LoginPage />
			</Suspense>
		),
	},
	{
		path: AUTH_BASE_ROUTES.FORGOT_PASSWORD,
		component: (
			<Suspense fallback={''}>
				<ForgotPasswordPage />
			</Suspense>
		),
	},
	{
		path: AUTH_BASE_ROUTES.REGISTER,
		component: (
			<Suspense fallback={''}>
				<RegisterPage />
			</Suspense>
		),
	},
];

// Public Routes
export const GENERAL_ROUTES = [
	{
		path: GENERAL_BASE_ROUTES.HOME,
		name: 'Home',
		icon: <Icon width={30} icon="carbon:home" />,
		component: (
			<Suspense fallback={''}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.ALBUMS,
		name: 'About',
		icon: <Icon width={30} icon="iconoir:album-carousel" />,
		component: (
			<Suspense fallback={''}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.PLAYLISTS,
		name: 'About',
		icon: <Icon width={28} icon="cil:album" />,
		component: (
			<Suspense fallback={''}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.SEARCH,
		name: 'Search',
		icon: <Icon width={28} icon="ion:search-outline" />,
		component: (
			<Suspense fallback={''}>
				<SearchPage />
			</Suspense>
		),
	},
];

// Protected Routes
export const DASHBOARD_ROUTES = [
	{
		path: DASHBOARD_BASE_ROUTES.HOME,
		name: 'Home',
		component: (
			<Suspense fallback={''}>
				<Dashboard />
			</Suspense>
		),
	},
];
