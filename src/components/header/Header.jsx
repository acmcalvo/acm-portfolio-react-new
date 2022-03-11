import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../navigation/Navigation.jsx";
import About from "../About/index";
import Portfolio from "../portfolio/Portfolio";
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content"> 
          {/* <Route exact path="/"> </Route> render={() => <Redirect to="/about" />} /> */}
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