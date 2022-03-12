import React from "react";
import me from "../assets/acm-resume.jpg";

function Resume() {
  return (
    
    
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
      <div className="d-flex">
        <img
          className="mx-5"
           id="resume-1"
         src={me} width="500" height="600"
          alt="Alvaro Calvo"
        />

      <div>
        <div class="mt-5">
          <h2 className="top-title">Alvaro Calvo</h2>
          <ul>
            <li>
              Full-Stack Web Development.
            </li>
          </ul>

          <p class="mt-5">
            <a href="www.linkedin.com/in/alvaro-calvo-acm">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://drive.google.com/file/d/1zYhDCdgn58FRbYCidykNUalOJl8GCHnH/view?usp=sharing"
            class="link"
          >
            Download Resume
          </a>
        
        </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;