import React, { Component } from "react";
import "./FurnitureDimensions.css";
import { Link } from "react-router-dom";
class FurnitureDimensions extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.props.state[e.target.name]);
  }
  render() {
    return (
      <div className="FurnitureDimensions">
        <label htmlFor="height">
          <div>Height (CM) </div>
          <input
            onChange={this.handleChange}
            value={this.props.Height}
            id="height"
            name="Height"
            className=""
            type="text"
          />
        </label>
        <label htmlFor="width">
          <div>Width (CM) </div>
          <input
            onChange={this.handleChange}
            value={this.props.Width}
            id="width"
            name="Width"
            className=""
            type="text"
          />
        </label>
        <label htmlFor="length">
          <div>Length (CM) </div>
          <input
            onChange={this.handleChange}
            value={this.props.Length}
            id="length"
            name="Length"
            className=""
            type="text"
          />
        </label>
      </div>
    );
  }
}

export default FurnitureDimensions;
