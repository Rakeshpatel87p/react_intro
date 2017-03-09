const 
	React = require('react'),
	ReactDOM = require('react-dom'),
	routes = require('./config/routes')


ReactDOM.render(routes, document.getElementById('app'));

// let USER_DATA = {
//     name: 'Rakesh Patel',
//     username: 'rakeshpatel87p',
//     age: '21'
// }

// const Age = React.createClass({
//   render() {
// 	return <div>{this.props.ageUser}</div>  }
// });

// const ProfileLink = React.createClass({
//   render() {
//     return (
//       <div>
//         <a href={'https://www.github.com/' +  this.props.username}>
//           {this.props.username}
//         </a>
//       </div>
//     );
//   }
// });

// const ProfileName = React.createClass({
//   render(){
//     return <div>{this.props.name}</div>
//   }
// });

// const Avatar = React.createClass({
//   render() {
//     return(
//       <div>
//         <Age ageUser={this.props.user.age}/>
//         <ProfileName name={this.props.user.name}/>
//         <ProfileLink username={this.props.user.username}/>
//       </div>
//     );
//   }
// });