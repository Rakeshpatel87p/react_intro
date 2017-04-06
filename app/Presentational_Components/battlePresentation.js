import React from 'react';
import BattleContainer from '../components/battleContainer';

const battlePresentation = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState(){
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	render(){
		return (<BattleContainer />)
	}
})

export default battlePresentation