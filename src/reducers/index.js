import {combineReducers} from 'redux';
import products from './products';
import inventory from './inventory';
import cart from './cart';

const rootReducer = combineReducers({products,inventory,cart});

export default rootReducer;
