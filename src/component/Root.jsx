import React from "react";
/*toastr css*/
import "../../node_modules/toastr/build/toastr.css";
/*toastr js*/
import toastr from "../../node_modules/toastr/build/toastr.min.js";
/*react router*/
import { Link } from "react-router";
import NavBar from "./NavBar.jsx";

var Root = React.createClass({
  displayName: "Root",
  show(){
  	toastr.info("Welcome to React Koa Seed!");
  },
  render() {
    return <div>
      <NavBar/>
      <Link to={"/result"}>Go To Result</Link>
    	<h3>{this.props.title}<div className="btn btn-primary" onClick={this.show}>Button</div></h3>
    	{this.props.children}
    </div>;
  }
});
export default Root;
