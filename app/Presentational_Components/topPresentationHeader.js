import React from 'react';
import ReactDOM from 'react-dom';

const topPresentationHeader = React.createClass({
	render(){
		return (
			<div>
				<h1>Some Header Text</h1>
				<div>
					<form>
						<div className="formGroup">
							<input 
								className="formControl"
								placeHolder="GitHub Username"
								type="text" />
						</div>
						<div className="formGroup">
							<button 
								className="Hey"
								type="submit">
								Continue
							</button>
						</div>
					</form>
				</div>
			<div>
			)
	}
});

export default topPresentationHeader;