import React from 'react';

export default class Add extends React.Component {
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
	                        <label for="time">Continent</label>
	                    </td>
	                    <td>
	                        <input type="text" name="Continent"/>
	                    </td>
	                </tr>
	                <tr>
	                    <td>
	                        <label for="population">Population</label>
	                    </td>
	                    <td>
	                        <input type="text" name="Population"/>
	                    </td>
	                </tr>
	                </tbody>
	                <tfoot>
		                <tr>
		                    <td colSpan="3"><button>Add</button></td>
		                </tr>
	                </tfoot>
                </table>
			</div>
		);
	}
}