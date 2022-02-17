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

  //   it runs when the component is mounted to the DOM
  //   it runs when component is created
  componentDidMount() {
    console.log("componentDidMount");
  }

  // it runs when the component is updated
  // it runs when a state is updated or a prop is updated
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // it runs when the component is unmounted from the DOM
  // it runs when component is destroyed or removing from the DOM or change the route
  componentWillUnmount() {
    console.log("componentWillUnmount");
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
