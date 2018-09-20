import React, { Component } from "react";
import CounterComponent from "./counter.component";

class CountersComponent extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <CounterComponent
            key={counter.id}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default CountersComponent;
