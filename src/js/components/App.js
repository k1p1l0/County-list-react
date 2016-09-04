import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions/countriesActions';

import List from './List';
import Description from './Description';
import Add from './Add';

@connect((store) => {
	return {
		countries: store.countries
	};
})

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

	componentWillMount () {
		this.props.dispatch(fetchCountries());
	}

	clicked (country) {
		this.setState({country});

		this.forceUpdate();
	}

	loadCountries () {
		this.props.dispatch(fetchCountries());
	}

	render () {
		const { countries } = this.props;

		if (countries) {
			return <div class="container">
				<div class="row">
					<List data={countries.countries} callback={this.clicked.bind(this)} />
					<Description country={this.state.country} />
					<Add dispatch={this.props.dispatch} />
				</div>
			</div>
		}

		return null;
	}
}