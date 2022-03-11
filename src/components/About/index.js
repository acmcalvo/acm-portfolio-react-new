import React from "react";
import me from '../assets/me.jpg';

function About() {
  return (
    <section className="container">
      <h2 class="top-title">Alvaro Calvo</h2>
      <hr></hr>
      <div className="d-flex">
        <img
          className="mx-5"
           id="avatar"
         src={me} width="200" height="200"
          alt="Alvaro Calvo"
        />
       
        <div>
          
          <p>
          I was born and raised in San Jose, Costa Rica, for most of my childhood I live in a small town known as "Curridabat." I attend High School in the same town that I meet the love of my life.
           
          </p>
          <p>
          We get married, and we have two daughters and two sons, After we got married, we moved to America to explore how to leave different counties Plus, my wife was born in the United States.
          </p>
          <p>
          As early as 2000, we returned to Costa Rica, I started working at Advertising Company Sepacolor,Sepacolor, 
          which change my carrier, and let me get more in the technical side of "Graphics Design," so pursue grow in my 
          carrier take the chance to get another job in Tribu Saatchi & Saatchi, now called Havas Costa Rica, is a great place 
          to work and a very professional workplace, Watching my three kids grow up. We always like being parents and we want 
          to give my children the best we move back to the USA, My eldest son was suffocated by all the changes at that time, 
          my old hope he missed so, they started to grow up here So, they started to grow here. Then, In order to go to college, 
          my son move to Daytona Beach, and my daughter decided to join the army And young people still want to have a home in high school. 
          So .. Something happened, we got a new member in our family, in the mean time My son graduated from university and became AeroSpaces Enginer ,
           and my daughter She has just completed her deployment and changed hands into the car dealership business. My old song was pursued in college.
           
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
