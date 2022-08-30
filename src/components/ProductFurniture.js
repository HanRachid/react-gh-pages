import React, { Component } from "react";
import "./Product.css";
class ProductFurniture extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.checked) {
      this.props.setState({
        massdelete: [...this.props.state.massdelete, this.props.sku],
      });
    } else {
      const arraydelete = this.props.state.massdelete;
      const filteredArray = arraydelete.filter((e) => {
        return e !== this.props.sku;
      });
      this.props.setState({ massdelete: filteredArray });
    }
  }
  render() {
    return (
      <div className="Product">
        <div className="checkbox">
          <input
            type="checkbox"
            name="delete-checkbox"
            className="delete-checkbox"
            onChange={this.handleChange}
          />
        </div>

        <div className="item-properties">
          <h3 className="SKU">{this.props.sku}</h3>
          <div className="Name">{this.props.name}</div>
          <div className="Price">Price : {this.props.price} $ </div>
          <div className="Dimension">
            Dimension : {this.props.height}x{this.props.width}x
            {this.props.length}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductFurniture;
