import React from 'react';
import {ReactRouter, Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import topPresentationHeader from '../Presentational_Components/topPresentationHeader';
import battlePresentation from '../Presentational_Components/battlePresentation';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			<IndexRoute component={Home} />
			<Route path="playerOne" header="Player One" component={topPresentationHeader}/>
			<Route path="playerTwo/:playerOne" header="Player Two" component={topPresentationHeader}/>
			<Route path="battle" component={battlePresentation}/>
		</Route>
	</Router>
)

export default routes;
