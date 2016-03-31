import React from 'react';
import { Link } from 'react-router';
 var NavBar = React.createClass({
	displayName: "NavBar",
  contextTypes: {
    router: React.PropTypes.object
  },
 	render() {
    var isRouteActive = this.context.router.isActive;
   
 		return (
 			   <nav className="navbar navbar-default">
          <div className="container-fluid">
          
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                
                <li className={isRouteActive("/result") ? "active" : ""}><Link to={"/result"} >Result</Link></li>
                <li className={isRouteActive("/info") ? "active" : ""}><Link to={"/info"} >Info</Link></li>
                <li className={isRouteActive("/setting") ? "active" : ""}><Link to={"/setting"} >Setting</Link></li>
               
              </ul>
             
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
                
              </ul>
            </div>
          </div>
        </nav>
 		);
 	}
 });

 export default NavBar;
 