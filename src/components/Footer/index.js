import React from "react";
import Octocat from "../assets/Octocat.png";

function Footer() {
  return (
    <footer className="footer bg-secondary sticky-botton">
      <a href="https://github.com/acmcalvo">
        <img
          src={Octocat} width="100" height="100"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="www.linkedin.com/in/alvaro-calvo-acm">
        <img
          src="https://img.icons8.com/fluent/48/000000/linkedin.png"
          alt="LinkedIn"
          className="icon"
        />
      </a>
    </footer>
  );
}

export default Footer;
