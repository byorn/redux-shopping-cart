import React, { Component } from 'react';
import CheckoutPanel from './CheckoutPanel';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CheckoutLink extends Component {

  buildCounter(cartItems) {
    let count = 0
    for(var cartItem of cartItems){
      count+=cartItem.qty
    }
    return count;
  }

  render() {

    const {cartItems} = this.props;

    return (
      <div>
      <Router>
            <div>
              <h2>   Cart : {this.buildCounter(cartItems)} </h2>
              <br/>

              <Link to='/checkout' className="btn btn-success">Check out </Link>
            <Switch>
             <Route exact path="/checkout" component={CheckoutPanel} />
            </Switch>
            </div>
      </Router>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cartItems:state.cart.cartItems
  }
}

function mapDispachToProps(dispatch){
  return {}
}

export default connect(mapStateToProps, mapDispachToProps)(CheckoutLink);
