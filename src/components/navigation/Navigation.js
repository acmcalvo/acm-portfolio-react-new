// import React from "react";
// import { Navbar } from "react-bootstrap";
// import {NavLink} from "react-router-dom";

// function Navigation(props) {
//   return (
//     <div>
//       <Navbar expand="lg" bg="secondary" sticky="top">
//         <NavLink className="nav-link" to="/">
//           <div className="text-light">
//             <h4 className="nav-title-font">Alvaro Calvo</h4>
//           </div>
//         </NavLink>
//         <ul className="navbar-nav ml-auto navitem-indent">
//           <li className="nav-item">
//             <NavLink to="/about">
//               <div className="nav-font text-light">About Me</div>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/portfolio">
//               <div className="nav-font text-light">Portfolio</div>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/contact">
//               <div className="nav-font text-light">Contact</div>
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/resume">
//               <div className="nav-font text-light">Resume</div>
//             </NavLink>
//           </li>
//         </ul>
//       </Navbar>
//     </div>
//   );
// }

// export default Navigation;

import React from "react";
import "./styles.css";
import { Nav, Navbar, } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#main">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        Alvaro Calvo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">| Portfolio |</Nav.Link>
          <Nav.Link href="#Contact">Contact |</Nav.Link>
          <Nav.Link href="#resume">Resume |</Nav.Link>
          </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
