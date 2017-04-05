import React from 'react';
import ReactDOM from 'react-dom';
import Prompt from './Prompt';

const topPresentationHeader = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState(){
		return {
			username: ''
		}		
	},
	handleUpdateUser(e){
		e.preventDefault();
		this.setState({
			username: e.target.value
		})
	},
	handleSubmitUser(e){
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		})
		if (this.props.routeParams.playerOne){
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		}
		else {
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},
	render(){
		return (
			<Prompt 
				onSubmitUser = {this.handleSubmitUser}
				onUpdateUser = {this.handleUpdateUser}
				header = {this.props.route.header}
				username = {this.state.username}/>
			)
	}
});

export default topPresentationHeader;