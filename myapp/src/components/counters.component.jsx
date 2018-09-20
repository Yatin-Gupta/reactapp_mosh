import React, { Component } from "react";
import CounterComponent from "./counter.component";

class CountersComponent extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 6 }
    ]
  };

  deleteHandler = (counterId) => {
    let filtered = this.state.counters.filter(function(counter){
      if (counter.id !== counterId)
        return true;
      return false;
    });
    this.setState({counters: filtered});
  }

  resetHandler = () => {
    let resetCounters = this.state.counters.map((counter) => {
      counter.value = 0;  
      return counter;
    });
    console.log(resetCounters);
    this.setState({counters: resetCounters});
  };

  incrementHandler = (counterId) => {
    let incrementedCounters = this.state.counters.map((counter) => {
      counter.value = counter.id === counterId?counter.value+1:counter.value;
      return counter;
    });
    this.setState({counters: incrementedCounters});
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.resetHandler} >Reset</button>
        {this.state.counters.map(counter => (
          <CounterComponent
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
            counter={counter}
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
          ><h4>Counter #{counter.id}</h4></CounterComponent>
        ))}
      </div>
    );
  }
}

export default CountersComponent;
