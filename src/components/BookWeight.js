import React, { Component } from "react";
import "./BookWeight.css";
import { Link } from "react-router-dom";
class BookWeight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BookWeight">
        <label htmlFor="weight">
          <div>Weight (Kg) </div>
          <input id="weight" name="weight" type="text" />
        </label>
      </div>
    );
  }
}

export default BookWeight;
