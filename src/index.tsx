import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import store from './store/store';
import './styles/index.less';
render(
	<Provider store={store}>
		{/* <RoomProvider
			id={`${window.location.pathname.split('/').pop()}`}
			initialPresence={{
				cursor: null
			}}
		> */}
		<App />
		{/* </RoomProvider> */}
	</Provider>,
	document.getElementById('root')
);
