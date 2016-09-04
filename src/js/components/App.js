import React from 'react';
import { render } from 'react-dom';

import List from './List';
import Description from './Description';
import Add from './Add';

export default class App extends React.Component {
	constructor () {
		super();

		this.state = {
			country: {
				name: 'N/A',
				capital: 'N/A',
				location: 'N/A'
			}
		};
	}

	clicked (country) {
		this.setState({country});

		this.forceUpdate();
	}

	render () {		
		return <div class="container">
			<div class="row">
				<List data={this.props.data} callback={this.clicked.bind(this)} />
				<Description country={this.state.country} />
				<Add />
			</div>
		</div>
	}
}