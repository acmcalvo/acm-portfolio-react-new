import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import ContactForm from '../contact/ContactForm';
import Resume from '../resume/Resume';
import Main from '../main/Main';




class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content"> 

          <Route exact path="/" render={() => <Redirect to="/main"/>} />
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={ContactForm}/>
          <Route path="/resume" component={Resume}/>

        </div>
      </HashRouter>
    );
  }
}

export default Header;

