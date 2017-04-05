import React from 'react';
import ReactDOM from 'react-dom';

const topPresentationHeader = React.createClass({
	getInitialState() {
		return {
			username: ''
		}		
	},
	render(){
		return (
			<div>
				<h1>{this.props.route.header}</h1>
				<div>
					<form>
						<div className="formGroup">
							<input 
								className="formControl"
								onChange={this.onUpdateUser}
								value={this.state.username}
								placeholder="GitHub Username"
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
			</div>
			)
	}
});

export default topPresentationHeader;