const 
	React = require('react'),
	ReactDOM = require('react-dom');

const Main = React.createClass({
	render(){
		return (
				<div className="main-container">Hello From!{this.props.children}</div>
			)
			
	}
});

export default Main;