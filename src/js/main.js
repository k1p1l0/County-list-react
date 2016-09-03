import React from 'react';
import { render } from 'react-dom';

import App from './components/App'

document.addEventListener('DOMContentLoaded', init, false);

function init () {
	const $EL = $('#app')[0];

	render(<App/>, $EL);
}