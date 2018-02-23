import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProductPanel extends Component{



render(){
  const {product,onAddToCart} = this.props;
  return (
      <div className="productPanel">
        <img alt="" className="productImage" src={product.imageUrl}/>
        <div className="productPanelDetails">
            {product.productName}<br/>
            Price: {product.price} AUD<br/>
            <button className="btn btn-success" onClick={onAddToCart}>Add To Cart</button>
        </div>
      </div>
      )
}

}

ProductPanel.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ProductPanel
