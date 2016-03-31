import React from 'react';

 var Info = React.createClass({
    displayName: "Info",
    contextTypes: {
      router: React.PropTypes.object
    },
    render() {
        return (
          <div>
           Nested Infomation
          </div>
        );
    }
 });

 export default Info;
 