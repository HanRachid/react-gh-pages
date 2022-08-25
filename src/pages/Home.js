import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Product from "../components/Product";
import Header from "../components/Header";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  array = [
    1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2,
    1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2,
    1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1,
    2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1,
    2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2,
  ];

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/react", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "myName",
        password: "myPassword",
      }),
    });
    const json = await response.json();

    console.log(json);
  }
  render() {
    return (
      <div className="">
        <Header />
        <hr />
        <div className="contains-products">
          {this.array.map((e) => {
            return <Product sku={e} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
