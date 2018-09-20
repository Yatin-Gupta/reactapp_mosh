import React, { Component } from "react";

class CounterComponent extends Component {
  state = {
    count: 1,
    imageUrl: "http://picsum.photos/200"
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClassLabel()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm" styles={{ width: "10px" }}>
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClassLabel() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }

  incrementCount() {
    ++this.state.count;
  }
}

export default CounterComponent;
