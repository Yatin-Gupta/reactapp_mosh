import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import CounterComponent from "./components/counter.component";

//var element = <h1>Hello World</h1>;
//console.log(element);

ReactDOM.render(<CounterComponent />, document.getElementById("root"));
