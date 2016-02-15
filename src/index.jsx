import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Root from  "./component/Root.jsx";

ReactDOM.render(React.createElement(Root, { name: "World" }), document.getElementById("root"));