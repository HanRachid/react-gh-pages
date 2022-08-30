import React, { Component } from "react";
import "./HeaderAdd.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
class HeaderAdd extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      variable: "",
      pass: false,
      clicked: false,
    };
    this.makeid = this.makeid.bind(this);
  }
  makeid(length) {
    let result = "";
    let characters = "0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  async handleSubmit() {
    const products = { ...this.props.state };
    products.SKU = "AJ" + this.makeid(10) + products.SKU;
    const productProps = { ...products };

    const productRules = {};
    delete productProps.validation;

    this.setState({ clicked: true });
    for (let key in productProps) {
      if (key == "Name") {
        productRules[key] = ["required", "min:3"];
      } else if (key == "SKU") {
        productRules[key] = ["required", "unique"];
      } else if (productProps[key] === null || productProps[key] === false) {
        delete productProps[key];
      } else if (productProps[key] !== true) {
        productRules[key] = ["required"];
      }
    }

    const Products = { productProps, productRules };
    console.log(productRules);
    const validateresponse = await fetch(
      "http://localhost:5000/reactvalidation",
      {
        method: "post",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(Products),
      }
    );
    this.setState({ clicked: false });
    const validate = await validateresponse.json();
    console.log(validate);

    if (validate === true) {
      this.setState({ pass: true, clicked: true });
      this.setState({ variable: "" });
      const response = await fetch("http://localhost:5000/reactadd", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });
      const json = await response.json();
    } else {
      this.setState({ clicked: false });

      for (let key in validate) {
        this.setState({ variable: validate[key] });
      }
    }
  }
  render() {
    const { pass } = this.state;
    if (pass) {
      return <Navigate to="/" />;
    }
    return (
      <div className="HeaderAdd">
        <h1 className="titleAdd">Product Add</h1>
        <div className="buttonsError">
          <div className="buttonsAdd">
            <Link to="/">
              <input id="cancel-button" type="button" value="Cancel" />
            </Link>

            <input
              formMethod="POST"
              type="submit"
              value="Save"
              id="save-button"
              form=""
              onClick={!this.state.clicked ? this.handleSubmit : null}
            />
          </div>
          <div className="error">{this.state.variable}</div>
        </div>
      </div>
    );
  }
}

export default HeaderAdd;
