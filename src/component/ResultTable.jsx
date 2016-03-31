import React from 'react';
import Reactable from "reactable";
var Table = Reactable.Table,
    Tr = Reactable.Tr;
 var ResultTable = React.createClass({
	displayName: "ResultTable",
	componentDidMount() {
		require('es6-promise').polyfill();
		require('isomorphic-fetch');
		fetch('//127.0.0.1:3000/result/123')
		    .then(function(response) {
		        if (response.status >= 400) {
		            throw new Error("Bad response from server");
		        }
		        return response.json();
		    })
		    .then(function(stories) {
		        console.log(stories);
		});
	},
 	render() {
 		return (
 			<Table className="table" data={[
		        { name: 'Row one', content: 'These are regular data rows' },
		        { name: 'Row two', content: 'They work like above' },
		    ]} >
		        <Tr className="special-row"
		            data={{ name: 'Other Row' , content: 'This is a different row' }} />
		    </Table>
 		);
 	}
 });

 export default ResultTable;
 