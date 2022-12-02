import { lazy, Suspense } from 'react';
import { AUTH_BASE_ROUTES, DASHBOARD_BASE_ROUTES, GENERAL_BASE_ROUTES } from './baseRoutes';
import { Icon } from '@iconify/react';

// Import Auth Routes
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage'));

// Import General Routes
const TrendingPage = lazy(() => import('../pages/general/TrendingPage'));
const AlbumPage = lazy(() => import('../pages/general/AlbumPage'));
const ChartPage = lazy(() => import('../pages/general/ChartPage'));
const PlayListPage = lazy(() => import('../pages/general/PlayListPage'));
const ArtistPage = lazy(() => import('../pages/general/ArtistPage'));
const DiscoverPage = lazy(() => import('../pages/general/DiscoverPage'));
const RadioPage = lazy(() => import('../pages/general/RadioPage'));
const SearchPage = lazy(() => import('../pages/general/SearchPage'));

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
		path: GENERAL_BASE_ROUTES.TRENDING,
		name: 'Trending',
		icon: <Icon width={30} icon="fluent-emoji:fire" />,
		component: (
			<Suspense fallback={''}>
				<TrendingPage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.ALBUMS,
		name: 'New Albums',
		icon: <Icon width={30} icon="fluent-emoji:clapper-board" />,
		component: (
			<Suspense fallback={''}>
				<AlbumPage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.CHARTS,
		name: 'Top Charts',
		icon: <Icon width={28} icon="fluent-emoji:bar-chart" />,
		component: (
			<Suspense fallback={''}>
				<ChartPage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.PLAYLISTS,
		name: 'Top Playlists',
		icon: <Icon width={28} icon="fluent-emoji:glowing-star" />,
		component: (
			<Suspense fallback={''}>
				<PlayListPage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.ARTISTS,
		name: 'Top Artists',
		icon: <Icon width={28} icon="fluent-emoji:man-singer-medium-light" />,
		component: (
			<Suspense fallback={''}>
				<ArtistPage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.DISCOVER,
		name: 'Discover',
		icon: <Icon width={28} icon="fluent-emoji:umbrella-on-ground" />,
		component: (
			<Suspense fallback={''}>
				<DiscoverPage />
			</Suspense>
		),
	},
	{
		path: GENERAL_BASE_ROUTES.RADIO,
		name: 'Radio',
		icon: <Icon width={28} icon="fluent-emoji:radio" />,
		component: (
			<Suspense fallback={''}>
				<RadioPage />
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
