import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/inventoryActions';

class Admin extends Component {


  render() {

   const {inventory} = this.props;

   let list  = [] ;
   for (var i of inventory) {
     list.push(<tr key={i.productId}>
                      <td> {i.productName} </td>
                      <td> {i.stock} </td>
               </tr>);

   }

  return (
      <div>
      <h2>Inventory</h2><br/>
      <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
          {list}
          </tbody>
          </table>
    </div>
    );
  }
}


function mapStateToProps(state){
  return {
    inventory:state.inventory
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Admin);
