import React from 'react';
import {ReactRouter, Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import topPresentationHeader from '../Presentational_Components/topPresentationHeader';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main} >
			<IndexRoute component={Home} />
			<Route path="playerOne" component={topPresentationHeader}/>
			<Route path="playerTwo/:playerOne" component={topPresentationHeader}/>
		</Route>
	</Router>
)

export default routes;
