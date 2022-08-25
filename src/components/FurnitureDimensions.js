import React, { Component } from "react";
import "./FurnitureDimensions.css";
import { Link } from "react-router-dom";
class FurnitureDimensions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FurnitureDimensions">
        <label htmlFor="height">
          <div>Height (CM) </div>
          <input id="height" name="" className="" type="text" />
        </label>
        <label htmlFor="width">
          <div>Width (CM) </div>
          <input id="width" name="" className="" type="text" />
        </label>
        <label htmlFor="length">
          <div>Length (CM) </div>
          <input id="length" name="" className="" type="text" />
        </label>
      </div>
    );
  }
}

export default FurnitureDimensions;
