import React, { Component } from "react";

class CounterComponent extends Component {
  // state = {
  //   count: this.props.value,
  //   imageUrl: "http://picsum.photos/200",
  //   tags: []
  // };

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

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Component Updated");
    console.log("Prev Props: ");
    console.log(prevProps);
    console.log("Prev State: ");
    console.log(prevState);
    console.log("current Props");
    console.log(this.props);
  }

  // renderTags() {
  //   // helper method for conditional rendering tags
  //   if (this.state.tags.length === 0) return <p>There are no tags!!</p>;
  //   else
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  // }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClassLabel()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          styles={{ border: "2px" }}
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          //onClick={() => this.incrementHandler({ id: 1 })} // this syntax is used to pass parameter to click event handler
          //onClick={this.incrementHandler}
        >
          Increment
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClassLabel() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { count } = this.state;
    //return count === 0 ? <h1>Zero</h1> : count;
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  //   incrementHandler() {
  //     // this will not be defined here by default.
  //     // To prevent this we need to bind(object=this) with this in this function
  //     // Best place to do this is inside constructor
  //     ++this.state.count;
  //     console.log("Increment count clicked with count: " + this.state.count);
  //     // same problem can be solved by using constructor function
  //   }

  // incrementHandler = ob => {
  //   //++this.state.count; // this will update count, but not reflect to view
  //   // To reflect changes to view, it can be done as:
  //   console.log(ob);
  //   this.setState({ count: this.state.count + 1 });
  //   console.log("Increment count clicked with count: " + this.state.count);
  // };
}

export default CounterComponent;
