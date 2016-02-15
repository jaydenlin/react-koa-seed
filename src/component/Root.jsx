import React from 'react';
var Root = React.createClass({
  displayName: "Root",
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
});
export default Root;
