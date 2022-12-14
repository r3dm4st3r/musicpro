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
	TRENDING: APPLICATION.HOME,
	ALBUM: `${APPLICATION.HOME}album`,
	CHART: `${APPLICATION.HOME}chart`,
	PLAYLIST: `${APPLICATION.HOME}playlist`,
	ARTIST: `${APPLICATION.HOME}artist`,
	DISCOVER: `${APPLICATION.HOME}discover`,
	RADIO: `${APPLICATION.HOME}radio`,
	SEARCH: `${APPLICATION.HOME}search`,
};
export const GENERAL_BASE_SUB_ROUTES = {
	ALBUM: `${GENERAL_BASE_ROUTES.ALBUM}/:id`,
	PLAYLIST: `${GENERAL_BASE_ROUTES.PLAYLIST}/:id`,
	ARTIST: `${GENERAL_BASE_ROUTES.ARTIST}/:id`,
};

// Dashboard Routes
export const DASHBOARD_BASE_ROUTES = {
	HOME: `${APPLICATION.DASHBOARD}`,
};
