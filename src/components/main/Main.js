import React from "react";
import "./mains.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    
    <header class="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-20 align-self-end">
            <h1 className="text-white font-weight-bold">Alvaro Calvo</h1>
            <hr class="separator" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white mb-5">
              I am a full stack web developer looking to build a more intuitive
              user experience on the web. I pursue certificate in full stack
              developer from the University of Central Florida bootcamp, with
              newly developed skills in JavaScript, CSS, React.js, and
              responsive web design. I am known as an innovative problem solver
              passionate about developing apps, with a focus on mobile-first
              design and development.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Main;
