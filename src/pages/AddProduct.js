import React, { Component } from "react";

import "./Addproduct.css";
import HeaderAdd from "../components/HeaderAdd";
import FurnitureDimensions from "../components/FurnitureDimensions";
import DVDsize from "../components/DVDsize";
import BookWeight from "../components/BookWeight";
class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DVD: true,
      Book: false,
      Furniture: false,
      SKU: "",
      Name: "",
      Price: "",
      Size: "",
      Weight: "",
      Height: "",
      Width: "",
      Length: "",
    };

    this.selectValue = this.selectValue.bind(this);
    this.renserType = this.renderType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  selectValue() {
    this.setState({
      value: event.target.value,
    });
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    console.log(e.target.value);
  }
  handleSubmit() {
    event.preventDefault();
    console.log("oui");
    const form = document.getElementById("product_form");
    const formData = new FormData(form);
    console.log(formData);
  }

  renderType(productType) {
    if (productType == "Furniture") {
      return <FurnitureDimensions />;
    } else if (productType == "DVD") {
      return <DVDsize />;
    } else {
      return <BookWeight />;
    }
  }

  render() {
    return (
      <div id="wholepage">
        <HeaderAdd />
        <hr />
        <div id="pagebody">
          <form id="product_form" onSubmit={this.handleSubmit}>
            <label htmlFor="sku">
              <div>SKU </div>
              <input
                onChange={this.handleChange}
                id="sku"
                name="SKU"
                className=""
                type="text"
              />
            </label>
            <label htmlFor="name">
              <div>Name </div>
              <input id="name" name="Name" className="" type="text" />
            </label>
            <label htmlFor="price">
              <div>Price ($)</div>
              <input
                onChange={this.handleChange}
                id="price"
                name="Price"
                className=""
                type="text"
              />
            </label>
            <label htmlFor="productType">
              <select
                onChange={this.selectValue}
                name="productTypes"
                id="productTypes"
              >
                <option value="DVD">DVD</option>
                <option value="Furniture">Furniture</option>
                <option value="Book">Book</option>
              </select>
            </label>
            {this.renderType(this.state.value)}
          </form>
        </div>
      </div>
    );
  }
}

export default Addproduct;
