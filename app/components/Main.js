const 
	React = require('react'),
	ReactDOM = require('react-dom');

const Main = React.createClass({
	render(){
		return (
				<div className="main-container">Hello From Hey!{this.props.children}</div>
			)
			
	}
});

module.exports = Main;