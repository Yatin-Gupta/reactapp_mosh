import React, { Component } from "react";
import logo from "./logo.svg";
import "./app.component.css";
import NavbarComponent from "./components/navbar.component";
import CountersComponent from "./components/counters.component";

class AppComponent extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 6 }
    ]
  };

  deleteHandler = counterId => {
    let filtered = this.state.counters.filter(function(counter) {
      if (counter.id !== counterId) return true;
      return false;
    });
    this.setState({ counters: filtered });
  };

  resetHandler = () => {
    let resetCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    console.log(resetCounters);
    this.setState({ counters: resetCounters });
  };

  incrementHandler = counterId => {
    let incrementedCounters = this.state.counters.map(counter => {
      counter.value =
        counter.id === counterId ? counter.value + 1 : counter.value;
      return counter;
    });
    this.setState({ counters: incrementedCounters });
  };

  getTotalCounters() {
    let sum = 0;
    this.state.counters.forEach(function(counter) {
      sum += counter.value;
    });
    return sum;
  }

  render() {
    return (
      <React.Fragment>
        <NavbarComponent counterLength={this.getTotalCounters()} />
        <main className="container">
          <CountersComponent
            counters={this.state.counters}
            onIncrement={this.incrementHandler}
            onDelete={this.deleteHandler}
            onReset={this.resetHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default AppComponent;
