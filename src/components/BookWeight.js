import React, { Component } from "react";
import "./BookWeight.css";
import { Link } from "react-router-dom";
class BookWeight extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setDefaultBook = this.setDefaultBook.bind(this);
  }
  handleChange(e) {
    this.props.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.props.state[e.target.name]);
  }

  setDefaultBook() {
    this.setState({
      Size: null,
      Height: null,
      Width: null,
      Length: null,
    });
  }
  render() {
    return (
      <div className="BookWeight">
        <label htmlFor="weight">
          <div>Weight (Kg) </div>
          <input
            onChange={this.handleChange}
            value={this.props.Weight}
            id="weight"
            name="Weight"
            type="text"
          />
        </label>
      </div>
    );
  }
}

export default BookWeight;
