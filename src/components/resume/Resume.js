import React from "react";
import me from "../assets/acm-resume.jpg";

function Resume() {
  return (
    
    
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
 

      <div>
        <div className="mt-5">
          <h2 className="top-title">Alvaro Calvo</h2>
          <ul>
            <li>
              Full-Stack Web Development.
            </li>
          </ul>

          <p className="mt-5">
            <a href="www.linkedin.com/in/alvaro-calvo-acm">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://drive.google.com/file/d/1zYhDCdgn58FRbYCidykNUalOJl8GCHnH/view?usp=sharing"
            className="link"
          >
            Download Resume
          </a>
          <div className="d-flex">
        <img
          className="mx-5"
           id="resume-1"
         src={me} width="100%"
          alt="Alvaro Calvo"
        />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;