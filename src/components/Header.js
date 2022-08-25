
import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <h1 className="title">Product List</h1>
        <div className="buttons">
        {<Link to="/addproduct"> <input type="button" value="ADD" /> </Link>}
        <input type="button" value="MASS DELETE" action="console.log('oui')" />
        </div>
      </div>
    );
  }
}

export default Header;

