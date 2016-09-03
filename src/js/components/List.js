import React from 'react';

export default class List extends React.Component {
	render () {
		return (
			<div class="col-md-4 list nopadding">
				<ul class="countries">
					<li class="active">
						<a href="#">Russia</a>
					</li>					
					<li>
						<a href="#">Ukraine</a>
					</li>
					<li>
						<a href="#">USA</a>
					</li>
				</ul>
			</div>
		);
	}
}