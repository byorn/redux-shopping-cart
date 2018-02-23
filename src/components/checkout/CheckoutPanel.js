import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import * as inventoryActions from '../../actions/inventoryActions';
import * as cartActions from '../../actions/cartActions';

class CheckoutPanel extends Component {

  constructor(props) {
    super(props);
    this.clearCartItemsAndUpdateInventory = this.clearCartItemsAndUpdateInventory.bind(this);
  }

  clearCartItemsAndUpdateInventory(){
    console.log("came here");
    let cartItems = this.props.cartItems;
    let inventoryActions = this.props.inventoryActions;
    let cartActions = this.props.cartActions;

    for(var ci of cartItems){

      inventoryActions.updateInventory(ci.productId,ci.qty);
    }

    cartActions.clearCart();
  }

  buildProductsList(cartItems) {
    return cartItems.map(cartItem => {
      return <CartItem key={cartItem.productId} cartItem={cartItem}/>
    })
  }

  render() {

    const {cartTotal, cartItems} = this.props;
    const list = this.buildProductsList(cartItems);
    return (
      <div className="checkoutPanel">
      <div className="row checkoutPanelHeader">

          <div className="col-lg-6"> Product </div>
          <div className="col-lg-2"> Qty </div>
          <div className="col-lg-4"> Total Price (AUD) </div>

      </div>
      <div className="productDetailFont">
          {list}
      </div>
      <div className="row productTotalFont marginTop">
        <div className="col-lg-6">Sub Total : </div>
        <div className="col-lg-2"> &nbsp; </div>
        <div className="col-lg-4">   {cartTotal} </div>
      </div>
      <div className="row marginTop">
        <div className="col-lg-12"><button className="btn btn-success" onClick={this.clearCartItemsAndUpdateInventory}>PAY</button> &nbsp;&nbsp; This will update inventory in Admin Menu </div>

      </div>

      <div> </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cartTotal:state.cart.cartTotal,
    cartItems:state.cart.cartItems
  }
}

function mapDispachToProps(dispatch){
 return { inventoryActions:bindActionCreators(inventoryActions,dispatch),
          cartActions:bindActionCreators(cartActions,dispatch)};
}

export default connect(mapStateToProps, mapDispachToProps)(CheckoutPanel);
