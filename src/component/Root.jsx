import React from 'react';
/*toastr css*/
import '../../node_modules/toastr/build/toastr.css';
/*toastr js*/
import toastr from '../../node_modules/toastr/build/toastr.min.js';

var Root = React.createClass({
  displayName: "Root",
  show(){
  	toastr.info("Welcome to React Koa Seed!");
  },
  render() {
    return <div>Hello {this.props.name}!<div className="btn btn-primary" onClick={this.show}>Button</div></div>;
  }
});
export default Root;
