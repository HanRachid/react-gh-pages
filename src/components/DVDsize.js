import React, { Component } from "react";
import "./DVDsize.css";
import { Link } from "react-router-dom";
class DVDsize extends Component {
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
      <div className="DVDsize">
        <label htmlFor="size">
          <div>Size (MB) </div>
          <input
            onChange={this.handleChange}
            value={this.props.Size}
            id="size"
            name="Size"
            type="text"
          />
        </label>
      </div>
    );
  }
}

export default DVDsize;
