export const APPLICATION = Object.freeze({
	HOME: '/',
	AUTH: '/auth',
	DASHBOARD: '/dashboard',
});

// Auth Routes
export const AUTH_BASE_ROUTES = {
	LOGIN: `${APPLICATION.AUTH}/login`,
	REGISTER: `${APPLICATION.AUTH}/register`,
	FORGOT_PASSWORD: `${APPLICATION.AUTH}/forgot-password`,
};

// General Routes
export const GENERAL_BASE_ROUTES = {
	HOME: APPLICATION.HOME,
	ALBUMS: `${APPLICATION.HOME}albums`,
	PLAYLISTS: `${APPLICATION.HOME}playlists`,
	SEARCH: `${APPLICATION.HOME}search`,
};

// Dashboard Routes
export const DASHBOARD_BASE_ROUTES = {
	HOME: `${APPLICATION.DASHBOARD}`,
};
