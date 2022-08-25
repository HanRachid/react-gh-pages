import React, { Component } from "react";
import "./Product.css";
class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Products">
        <div className="checkbox">
          <input
            type="checkbox"
            name="delete-checkbox"
            className="delete-checkbox"
          />
        </div>

        <div className="item-properties">
          <div className="SKU">{this.props.sku}</div>
          <div className="Description">Description</div>
          <div className="Price">PRICE</div>
          <div className="Weight">Size</div>
        </div>
      </div>
    );
  }
}

export default Product;