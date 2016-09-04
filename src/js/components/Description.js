import React from 'react';

export default class Description extends React.Component {
	render () {
		const { country } = this.props;
		
		return (
			<div class="col-md-4">
				<h1>{country.name}</h1>
				<div>{country.capital}</div>
				<div>{country.location}</div>
			</div>	
		);
	}
}