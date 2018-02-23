import React from 'react';
import { BrowserRouter as Router, Route ,Switch,NavLink } from 'react-router-dom'
import ShoppingCartPage from './components/shoppingcart/ShoppingCartAppContainer';
import AdminPage from './components/admin/Admin';


const RootApp = () => (

              <Router>
                    <div className="menubar">
                    <nav>
                        <ul >
                          <li><NavLink  exact activeClassName="active" to='/' >Shopping Cart App</NavLink ></li>
                          <li><NavLink   activeClassName="active" to='/admin' >Admin / Inventory</NavLink ></li>
                         </ul>
                    </nav>
                    <Switch>
                     <Route exact path="/" component={ShoppingCartPage} />
                     <Route exact path="/admin" component={AdminPage} />
                    </Switch>
                    </div>
              </Router>

            )


export default RootApp;
