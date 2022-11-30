import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { reducer } from './reducer';
import { liveblocksEnhancer } from '@liveblocks/redux';
import { createClient } from '@liveblocks/client';
const client = createClient({
	publicApiKey: 'pk_test_mu6YG4WfdeQ_PBe3KZt1Jw-X'
});

const rootReducer = (state: any, action: any) => {
	if (action.type === 'global/logOut') {
		state = undefined;
	}
	return reducer(state, action);
};

let middleware = [];
middleware = [logger];

const store = configureStore({
	reducer: rootReducer,

	middleware: middleware,
	enhancers: [
		liveblocksEnhancer({
			client,
			presenceMapping: { nested: true }
		})
	]
});

export default store;
