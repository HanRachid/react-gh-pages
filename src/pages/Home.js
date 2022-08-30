import React, { Component } from "react";
import { createPath, Link } from "react-router-dom";

import "./Home.css";
import ProductBook from "../components/ProductBook";
import ProductFurniture from "../components/ProductFurniture";
import ProductDVD from "../components/ProductDVD";
import Header from "../components/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      massdelete: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/react", {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    this.setState({
      array: Object.entries(json),
    });
  }
  render() {
    return (
      <div className="">
        <Header state={this.state} />
        <hr />
        <div className="contains-products">
          {this.state.array.map((e) => {
            return (
              (e[1].isBook && (
                <ProductBook
                  state={this.state}
                  setState={(e) => this.setState(e)}
                  sku={e[1].SKU}
                  name={e[1].name}
                  price={e[1].price}
                  weight={e[1].weight}
                />
              )) ||
              (e[1].isFurniture && (
                <ProductFurniture
                  state={this.state}
                  setState={(e) => this.setState(e)}
                  sku={e[1].SKU}
                  name={e[1].name}
                  price={e[1].price}
                  height={e[1].height}
                  length={e[1].length}
                  width={e[1].width}
                />
              )) ||
              (e[1].isDVD && (
                <ProductDVD
                  state={this.state}
                  setState={(e) => this.setState(e)}
                  sku={e[1].SKU}
                  name={e[1].name}
                  price={e[1].price}
                  size={e[1].size}
                />
              ))
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
