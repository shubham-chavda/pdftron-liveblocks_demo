import { WithLiveblocks } from '@liveblocks/redux';
import { createSlice } from '@reduxjs/toolkit';
import { Immutable } from 'immer';

// Define a type for the slice state
interface IGlobalState {
	cursor:{x: number, y: number};
	others:{connectionId: string,presence:any,isStorageLoading: boolean};
}

// Define the initial state using that type
export const initialState: Immutable<IGlobalState> = {
	cursor:{x: 0, y: 0},
	others:{connectionId: '',presence:{},isStorageLoading: false}
};

export const LiveblocksReducer = createSlice({
	name: 'liveblocks',
	initialState,
	reducers: {
		setCursor: (state, action) => {
      state.cursor = action.payload;
			// state.others=state.others+{...state.cursor}
    },
	}
});

export const {setCursor} = LiveblocksReducer.actions;

export default LiveblocksReducer.reducer;
