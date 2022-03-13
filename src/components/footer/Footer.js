import React from "react";
import Octocat from "../assets/Octocat.png";

function Footer() {
  return (
    <footer className="footer bg-secondary fixed-bottom">
      <a href="https://github.com/acmcalvo" target=" _blank">
        <img
          src={Octocat} width="80"
          alt="Github"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/alvaro-calvo-acm" target=" _blank">
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