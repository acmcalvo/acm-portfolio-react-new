import React from "react";
import me from '../assets/cover-project-2.png';

function About() {
  return (
    <section className="container">
      <h2 className="top-title">Full -Stack Web Development</h2>
      <hr></hr>
      <div className="d-flex">
        <img
          className="mx-5"
           id="avatar"
           src={me} width="100%"
          alt="Alvaro Calvo"
        />
       
        
      </div>
    </section>
  );
}

export default About;
