import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
	render(){
		return (
		<div>
			<h1>Github Battle</h1>
			<p>Some Fancy Motto</p>
			<Link to="/playerOne">
				<button type="button">Continue</button>
			</Link>
		</div>
		)
	}
});

export default Home;