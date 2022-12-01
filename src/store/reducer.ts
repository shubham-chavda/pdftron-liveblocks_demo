import { combineReducers } from 'redux';
import LiveblocksReducer from './Liveblocks/LiveblocksReducer';

export const reducer = combineReducers({ nested: LiveblocksReducer });
