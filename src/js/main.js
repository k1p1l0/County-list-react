import React from 'react';
import { render } from 'react-dom';

import App from './components/App'

document.addEventListener('DOMContentLoaded', init, false);

function init () {
	const $EL = $('#app')[0];
	const data = [{
				id: +new Date() + Math.random(),
				name: 'Russia123',
				capital: 'Moscow',
				location: 'Asia'
			}, {
				id: +new Date() + Math.random(),
				name: 'UKRAINE123',
				capital: 'Kiev',
				location: 'Europe'
			}, {
				id: +new Date() + Math.random(),
				name: 'USA',
				capital: 'Washington',
				location: 'South America'
			}
		];

	render(<App data={data}/>, $EL);
}