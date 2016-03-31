import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';
import Root from  "./component/Root.jsx";
import ResultTable from  "./component/ResultTable.jsx";
import Info from  "./component/Info.jsx";
import Setting from  "./component/Setting.jsx";

/*bootstrap as base css*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<Router history={browserHistory}>		
		<Route path="/" component={Root}> 
            <Route path="result" component={ResultTable}></Route>
            <Route path="info" component={Info}></Route> 
            <Route path="setting" component={Setting}></Route>            
		</Route>	
	</Router>, document.getElementById("root"));
