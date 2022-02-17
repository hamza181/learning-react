import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(params) {
    super(params);
    this.state = {
      name: "ClassComponent",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
