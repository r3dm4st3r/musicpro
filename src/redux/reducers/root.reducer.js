import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { globalReducer } from './global/global.reducer';
import { musicReducer } from './music/music.reducer';

const appConfig = {
	key: 'global',
	storage: storage,
	whitelist: ['app'],
};

export const rootReducer = combineReducers({
	global: persistReducer(appConfig, globalReducer),
	music: musicReducer,
});
