import React, { Component } from "react";

class CounterComponent extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  incrementCount() {
    ++this.state.count;
  }
}

export default CounterComponent;
