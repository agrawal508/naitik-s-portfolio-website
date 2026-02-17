import React from "react";
import "./../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
  <div className="skills-container">

    <div className="skills-header">
      <h2>Skills & Education</h2>
      <div className="underline"></div>
    </div>

    <div className="skills-wrapper">

      {/* SKILLS CARD */}
      <div className="skills-card-main">

        <h3>Core Skills</h3>

        <div className="skill-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>Tailwind</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>FastAPI</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Redis</span>
        </div>

        <div className="circle-group">

          <div
            className="circle"
            style={{ background: "conic-gradient(#111 0% 95%, #e5e7eb 95% 100%)" }}
          >
            <div className="circle-inner">95%</div>
            <span>React</span>
          </div>

          <div
            className="circle"
            style={{ background: "conic-gradient(#111 0% 90%, #e5e7eb 90% 100%)" }}
          >
            <div className="circle-inner">90%</div>
            <span>Python</span>
          </div>

          <div
            className="circle"
            style={{ background: "conic-gradient(#111 0% 88%, #e5e7eb 88% 100%)" }}
          >
            <div className="circle-inner">88%</div>
            <span>ML / AI</span>
          </div>

        </div>

      </div>

      {/* EDUCATION CARD */}
      <div className="education-card-premium">

        <span className="edu-date">AUG '23 - PRESENT</span>

        <h3>Lovely Professional University</h3>
        <h4>B.Tech Computer Science & Engineering</h4>

        <p>
          Maintaining a CGPA of 7.65 while focusing on algorithmic thinking,
          system design fundamentals and structured problem-solving.
        </p>

      </div>

    </div>
  </div>
</section>

  );
};

export default Skills;
 