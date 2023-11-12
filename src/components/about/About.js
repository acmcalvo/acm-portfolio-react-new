import React from "react";
import me from '../assets/me.jpg';

function About() {
  return (
    <section className="container">
      <h2 className="top-title">About Me</h2>
      <hr></hr>
      <div className="d-flex">
        <img
          className="mx-5"
           id="avatar"
         src={me} width="200" height="200"
          alt="Alvaro Calvo"/>
       
        <div>
          
          <p>
          To achieve highly functional and efficient communication systems through creative and collaborative developments 
          in modern workflow technologies. To continue to seek solutions for corporate integration into advancing software and
           production systems and needs.
           
          </p>
<p>
Exceptionally mindful of details, steady and committed work ethic, solid, consistent, focused
Excited about dissecting and solving problems and formulating and implementing new, efficient, and cost-effective solutions
<p>
Passionate about remaining up-to-date on current software advancements and trends.
</p>

<p>     
Extremely proficient across both Mac and PC platforms
</p>
<p>
30  years of Graphics Design networking, and prepress experience.
</p>
Bilingual with advanced fluency in Spanish
          </p>
          
      
        </div>
      </div>
    </section>
  );
}

export default About;
