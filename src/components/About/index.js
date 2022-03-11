import React from "react";

function About() {
  return (
    <section className="container">
      <h2 class="top-title">Alvaro Calvo</h2>
      <hr></hr>
      <div className="d-flex">
        <img
          class="mb-5"
          id="avatar"
          src="![me](https://user-images.githubusercontent.com/91921941/157585758-afea72b9-3c98-4727-a1a7-a571030b7ebe.jpg)"
          alt="Alvaro Calvo"
        />
        <div>
          <p>
            Text-1
          </p>
          <p>
            Text-2
          </p>
          <p>
           Text-3
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
