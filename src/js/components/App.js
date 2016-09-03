import React from 'react';
import { render } from 'react-dom';

import List from './List';
import Description from './Description';
import Add from './Add';

export default class App extends React.Component {
	render() {
		return <div class="container">
			<div class="row">
				<List />
				<Description />
				<Add />
			</div>
		</div>
	}
}