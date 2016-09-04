import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App'
import store from './store';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
	const $EL = $('#app')[0];
	
	render(<Provider store={store}>
		<App />
	</Provider>, $EL);
}