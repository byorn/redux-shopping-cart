import React, { Component } from 'react';


class CartItem extends Component {



  render() {

    const {cartItem} = this.props;

    return (
    <div className="row">
        <div className="col-lg-6"> { cartItem.productName } </div>
        <div className="col-lg-2"> { cartItem.qty } </div>
        <div className="col-lg-4"> { cartItem.totalPrice }</div>
    </div>
    );
  }
}



export default CartItem;
