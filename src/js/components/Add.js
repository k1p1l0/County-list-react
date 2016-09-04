import React from 'react';

import { addCountry } from '../actions/countriesActions';


export default class Add extends React.Component {
	clicked () {
		let country = {
				id: +new Date() + Math.random(),
				name: 'Test',
				capital: 'Test',
				location: 'Test'
		};

		this.props.dispatch(addCountry(country));
	}

	render () {
		return (
			<div class="col-md-4 nopadding">
	            <h1>Add country</h1>
				<table class="table table-striped">
					<tbody>
	            	<tr>
	                    <td>
	                        <label for="name">Name</label>
	                    </td>
	                    <td>
	                        <input type="text" name="Name"/>
	                    </td>
	                </tr>
	               	<tr>
	                    <td>
	                        <label for="capital">Capital</label>
	                    </td>
	                    <td>
	                        <input type="text" name="Capital"/>
	                    </td>
	                </tr>
	               	<tr>
	                    <td>
	                        <label for="time">Location</label>
	                    </td>
	                    <td>
	                        <input type="text" name="Location"/>
	                    </td>
	                </tr>
	                </tbody>
	                <tfoot>
		                <tr>
		                    <td colSpan="3"><button onClick={this.clicked.bind(this)}>Add</button></td>
		                </tr>
	                </tfoot>
                </table>
			</div>
		);
	}
}