const React = require('react');
const ReactDOM = require('react-dom');

const HelloWorld = React.createClass({
    render() {
        return ( <div>Hi {this.props.name}!</div>)
    }
});

ReactDOM.render( < HelloWorld name="billymax"/ > , document.getElementById('app'))

