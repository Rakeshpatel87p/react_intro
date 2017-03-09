var USER_DATA = {
    name: 'Rakesh Patel',
    username: 'rakeshpatel87p',
    age: '21'
}

var React = require('react');
var ReactDOM = require('react-dom');

var Age = React.createClass({
  render: function () {
	return <div>{this.props.ageUser}</div>  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <Age ageUser={this.props.user.age}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));