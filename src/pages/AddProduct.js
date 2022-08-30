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
      validation: {
        name: false,
      },
      Name: "",

      SKU: "",
      Price: "",
      Size: "",

      Weight: null,

      Height: null,
      Width: null,
      Length: null,

      DVD: true,
      Furniture: false,
      Book: false,
    };

    this.renderType = this.renderType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDefaultDVD = this.setDefaultDVD.bind(this);
    this.setDefaultFurniture = this.setDefaultFurniture.bind(this);
  }

  setDefaultDVD() {}
  setDefaultFurniture() {}
  handleChange(e) {
    const value = e.target.value;

    this.setState({
      [e.target.name]: value,
    });
    console.log(value);
  }

  renderType(event) {
    event.persist();
    this.setState({
      DVD: false,
      Furniture: false,
      Book: false,
      [event.target.value]: true,

      Size: event.target.value == "DVD" ? "" : null,

      Weight: event.target.value == "Book" ? "" : null,
      Height: event.target.value == "Furniture" ? "" : null,
      Width: event.target.value == "Furniture" ? "" : null,
      Length: event.target.value == "Furniture" ? "" : null,
    });
  }

  render() {
    return (
      <div id="wholepage">
        <HeaderAdd state={this.state} setState={this.setState} />
        <hr />
        <div id="pagebody">
          <form id="product_form">
            <label htmlFor="sku">
              <div>SKU </div>
              <input
                onChange={this.handleChange}
                id="sku"
                name="SKU"
                className=""
                type="text"
                required="number"
              />
            </label>
            <label htmlFor="name">
              <div>Name </div>
              <input
                required="require"
                onChange={this.handleChange}
                id="name"
                name="Name"
                className=""
                type="text"
              />
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
                onChange={this.renderType}
                name="productTypes"
                id="productTypes"
              >
                <option value="DVD">DVD</option>
                <option value="Furniture">Furniture</option>
                <option value="Book">Book</option>
              </select>
            </label>
            {this.state.Furniture && (
              <FurnitureDimensions
                setState={(e) => this.setState(e)}
                state={this.state}
              />
            )}
            {this.state.DVD && (
              <DVDsize setState={(e) => this.setState(e)} state={this.state} />
            )}

            {this.state.Book && (
              <BookWeight
                setState={(e) => this.setState(e)}
                state={this.state}
              />
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Addproduct;
