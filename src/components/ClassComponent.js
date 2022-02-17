import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(params) {
    super(params);
    this.state = {
      name: "ClassComponent",
      id: 1,
    };
  }

  onClick() {
    this.setState({ name: "Hamza" });
  }

  render() {
    return (
      <div>
        <p>
          Name: {this.state.name} Id: {this.state.id}
        </p>
        <button onClick={this.onClick.bind(this)}>Click</button>
      </div>
    );
  }
}
