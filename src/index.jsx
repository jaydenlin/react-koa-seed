import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,DefaultRoute } from 'react-router';
import Root from  "./component/Root.jsx";
import ResultTable from  "./component/ResultTable.jsx";

/*bootstrap as base css*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// /*bootstrap as base js*/
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
	<Router history={browserHistory}>		
		<Route path="/" component={Root}/>
			<Route path="/result" component={ResultTable}/>
		<Route />	
	</Router>, document.getElementById("root"));
