import React, { Component } from 'react';
import ProductPanel from './ProductPanel';
import CheckoutLink from '../checkout/CheckoutLink';
class ShoppingCart extends Component {


  buildProductLine(products){
    return products.map(product => {
      return <div className="col-lg-4"  key={product.productId}>
                <ProductPanel product={product} onAddToCart={this.props.cartActions.addToCart.bind(null,product)}/>
             </div>
    })
  }

  buildProductsList(products) {
    let list = [];
    let tempArray = [];
    var i = 0;
    for(var p of products){

        if(i % 3 === 0){
          let tr = <div className="row" key={i}> { this.buildProductLine(tempArray)  }</div>
          list.push(tr);
          tempArray = [];

        }

        tempArray.push(p);
        ++i;
    }

    if(tempArray.length>0){
        let tr = <div className="row" key={i}> { this.buildProductLine(tempArray)  }</div>
        list.push(tr);
    }

    return list;

  }


  render() {

    const { products } = this.props;

    const list = this.buildProductsList(products);


    return (
      <div className="App">
          <div className="row">
            <div className="col-lg-8">
                <h2>Products</h2>
                <br/>
                {list}
            </div>
            <div className="col-lg-4">
                <CheckoutLink/>
            </div>
          </div>
      </div>
    );
  }
}



export default ShoppingCart;
