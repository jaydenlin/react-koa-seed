import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Root from  "./component/Root.jsx";

/*bootstrap as base css*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Root name="World"></Root>, document.getElementById("root"));