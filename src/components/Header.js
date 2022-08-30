import React, { Component } from "react";
import "./Header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { massdelete: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    const massdelete = Object.assign(this.props.state.massdelete);

    const salut = await fetch("http://localhost:5000/reactremove", {
      method: "post",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(massdelete),
    });

    const json = await salut.json();
    console.log(json);
    if (json.length > 0) {
      this.setState({ massdelete: true });
    }
  }
  render() {
    const { massdelete } = this.state;

    if (massdelete) {
      this.setState({ massdelete: false });
      return <Navigate to="/testdone" />;
    }
    return (
      <div className="Header">
        <h1 className="title">Product List</h1>
        <div className="buttons">
          {
            <Link to="/addproduct">
              {" "}
              <input id="add-product-btn" type="button" value="ADD" />{" "}
            </Link>
          }
          <input
            type="button"
            id="delete-product-btn"
            value="MASS DELETE"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Header;
