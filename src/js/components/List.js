import React from 'react';

export default class List extends React.Component {
	clicked (country) {
		this.props.callback(country);
	}

	render () {		
		var lis = this.props.data.map(function (country) {
			return (
				<li key={country.id}>
					<a onClick={this.clicked.bind(this, country)}>{country.name}</a>
				</li>	
			);
		}.bind(this));

		return (
			<div class="col-md-4 list nopadding">
				<ul class="countries">
					{lis}
				</ul>
			</div>
		);
	}
}