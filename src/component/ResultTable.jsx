import React from 'react';
import Reactable from "reactable";
var Table = Reactable.Table,
    Tr = Reactable.Tr;
 var ResultTable = React.createClass({
	displayName: "ResultTable",
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
 