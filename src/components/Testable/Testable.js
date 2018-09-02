import React, { Component } from "react";
import PropTypes from "prop-types";

class Testable extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      list: ["one", "two", "three"]
    };
  }

  renderList() {
    return this.state.list.map((el, index) => <li key={index}>{el}</li>);
  }

  render() {
    return (
      <div>
        <h3>Hello</h3>
        <p>Currently status is {this.state.status ? "ON" : "OFF"}</p>
        <button
          className="toggleState"
          onClick={() => {
            this.setState({ status: !this.state.status });
          }}
        >
          Toggle status
        </button>

        {this.state.list.length > 0 && <ul>{this.renderList()}</ul>}
      </div>
    );
  }
}

export default Testable;
