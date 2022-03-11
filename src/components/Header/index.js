import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Navigation from "../Navigation/index.js";
import About from "../About/index";
import Portfolio from "../Portfolio/index";
import Contact from '../Contact/index';
import Resume from '../Resume/index';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">

          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;