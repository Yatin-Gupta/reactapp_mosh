import React, { Component } from "react"; // shortcut to create it imrc

// Stateless functional Component. Developers prefer to create these components for
// components that don't have state. In this components react has to pass props in it
// and we don't use this.props but instead just props.
// shortcut to create it on VSC is sfc
const NavbarComponent = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar {props.counterLength}
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavbarComponent;

// class NavbarComponent extends Component { // shortcut to create class is cc
//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-light bg-light">
//           <a className="navbar-brand" href="#">
//             Navbar {this.props.counterLength}
//           </a>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

// export default NavbarComponent;
