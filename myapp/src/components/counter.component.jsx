import React, { Component } from "react";

class CounterComponent extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
    tags: []
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  //   constructor() {
  //     super(); // must call
  //     this.incrementHandler = this.incrementHandler.bind(this); // this have reference of current class object,
  //     // so binding this object with incrementHandler, always result in calling of
  //     // same this.
  //   }

  renderTags() {
    // helper method for conditional rendering tags
    if (this.state.tags.length == 0) return <p>There are no tags!!</p>;
    else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClassLabel()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          styles={{ border: "2px" }}
          onClick={() => this.incrementHandler({ id: 1 })} // this syntax is used to pass parameter to click event handler
          //onClick={this.incrementHandler}
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a tag first"}
        {this.renderTags()}
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

  //   incrementHandler() {
  //     // this will not be defined here by default.
  //     // To prevent this we need to bind(object=this) with this in this function
  //     // Best place to do this is inside constructor
  //     ++this.state.count;
  //     console.log("Increment count clicked with count: " + this.state.count);
  //     // same problem can be solved by using constructor function
  //   }

  incrementHandler = ob => {
    //++this.state.count; // this will update count, but not reflect to view
    // To reflect changes to view, it can be done as:
    console.log(ob);
    this.setState({ count: this.state.count + 1 });
    console.log("Increment count clicked with count: " + this.state.count);
  };
}

export default CounterComponent;
