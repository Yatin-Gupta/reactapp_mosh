import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import CountersComponent from "./components/counters.component";
import AppComponent from "./app.component";

//var element = <h1>Hello World</h1>;
//console.log(element);

ReactDOM.render(<AppComponent />, document.getElementById("root"));
