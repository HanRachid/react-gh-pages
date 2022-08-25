import React, { Component } from "react";
import "./DVDsize.css";
import { Link } from "react-router-dom";
class DVDsize extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DVDsize">
        <label htmlFor="size">
          <div>Size (MB) </div>
          <input id="size" name="size" type="text" />
        </label>
      </div>
    );
  }
}

export default DVDsize;
