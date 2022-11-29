import { combineReducers } from '@reduxjs/toolkit';
import LiveblocksReducer from './Liveblocks/LiveblocksReducer';

export const initialState = {
};

export const reducer = combineReducers({
	liveblocks:	LiveblocksReducer,
});

