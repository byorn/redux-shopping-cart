import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as productActions from '../../actions/productActions';
import * as inventoryActions from '../../actions/inventoryActions';
import * as cartActions from '../../actions/cartActions';
import ShoppingCart from './ShoppingCart';


function mapStateToProps(state){
  return {
    products:state.products
  }
}

function mapDispachToProps(dispatch){
  return { productActions: bindActionCreators(productActions,dispatch),
           inventoryActions:bindActionCreators(inventoryActions,dispatch),
           cartActions:bindActionCreators(cartActions,dispatch)
         }
}

const ShoppingCartAppContainer = connect(mapStateToProps, mapDispachToProps)(ShoppingCart);

export default ShoppingCartAppContainer;
