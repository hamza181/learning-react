import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ClassComponent",
      id: 1,
    };
  }

  onClick() {
    this.setState({ id: this.state.id + 1 });
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

  // componentDidUpdate chalna chahiye ya nahi is lye shouldComponentUpdate use karte hen
  //   shouldComponentUpdate() {
  //     // if return false then component will not update
  //     // if return true then component will update
  //     return true;
  //   }

  //   if we want to call componentdidupdate on specific state or props changes
  shouldComponentUpdate(nextProps, nextState) {
    //   jab state name change hogi to componentdidupdate chale ga and then component rerender hoga
    if (nextState.name !== this.state.name) {
      return true;
    }
    // jab props.age change hogi to componentdidupdate chale ga and then component rerender hoga
    if (nextProps.age !== this.props.age) {
      return true;
    }

    // is k elawa koi aur state ya props change hoga to component rerender nahi hoga kyn k componentdidupdate nahi chale ga
    // else
    return false;
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
          Name: {this.state.name} Id: {this.state.id} Age: {this.props.age}
        </p>
        <button onClick={this.onClick.bind(this)}>Change Id</button>
      </div>
    );
  }
}
