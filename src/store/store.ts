import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import rootSaga from './saga';
import { reducer } from './reducer'
import { liveblocksEnhancer } from "@liveblocks/redux";
import { createClient } from '@liveblocks/client';
const client = createClient({
  // publicApiKey: process.env.LIVEBLOCKS_PUBLIC_KEY!,
  publicApiKey: '',
});

	const sagaMiddleware = createSagaMiddleware();

	const rootReducer = (state: any, action: any) => {
		if (action.type === 'global/logOut') {
			state = undefined;
		}
		return reducer(state, action);
	};

	let middleware = [];
			middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware, logger]

			const store = configureStore({
		reducer: rootReducer,

		middleware: middleware,
		enhancers: [
			liveblocksEnhancer({
				client,
				// storageMapping: {cursor:true},
				presenceMapping: {cursor:true},
			}),
		],
	})
	sagaMiddleware.run(rootSaga);

	export default store;
