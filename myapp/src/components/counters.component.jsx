import React, { Component } from "react";
import CounterComponent from "./counter.component";

class CountersComponent extends Component {
  // deleteHandler = counterId => {
  //   let filtered = this.props.counters.filter(function(counter) {
  //     if (counter.id !== counterId) return true;
  //     return false;
  //   });
  //   this.setState({ counters: filtered });
  // };

  // resetHandler = () => {
  //   let resetCounters = this.props.counters.map(counter => {
  //     counter.value = 0;
  //     return counter;
  //   });
  //   console.log(resetCounters);
  //   this.setState({ counters: resetCounters });
  // };

  // incrementHandler = counterId => {
  //   let incrementedCounters = this.props.counters.map(counter => {
  //     counter.value =
  //       counter.id === counterId ? counter.value + 1 : counter.value;
  //     return counter;
  //   });
  //   this.setState({ counters: incrementedCounters });
  // };

  constructor(props) {
    super(props);
    console.log("Counters Component constructor");
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <CounterComponent
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </CounterComponent>
        ))}
      </div>
    );
  }
}

export default CountersComponent;
