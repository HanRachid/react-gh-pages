import React, { Component } from "react";
import "./HeaderAdd.css";
import { Link } from "react-router-dom";
class HeaderAdd extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const form = document.getElementById("product_form");
    const datas = new FormData(form);
    console.log(datas);
  }
  render() {
    return (
      <div className="HeaderAdd">
        <h1 className="titleAdd">Product Add</h1>
        <div className="buttonsAdd">
          <Link to="/">
            <input type="button" value="Cancel" />
          </Link>
          <input
            formMethod="POST"
            type="submit"
            value="Save"
            form="product_form"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default HeaderAdd;
