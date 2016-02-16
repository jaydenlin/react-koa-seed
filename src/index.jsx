import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Root from  "./component/Root.jsx";

/*bootstrap as base css*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/*toastr css*/
import '../node_modules/toastr/build/toastr.css';

ReactDOM.render(React.createElement(Root, { name: "World" }), document.getElementById("root"));