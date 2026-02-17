import React, { useEffect, useRef, useState } from "react";
import "./../styles/skills.css";

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      
      {/* BACKGROUND TEXT */}
      <h2 className="text-[10vw] font-black text-gray-200/90 absolute top-20 left-4 leading-none select-none uppercase tracking-tighter whitespace-nowrap">
  SKILLS & EDUCATION
</h2>

      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">
          <h2 className="section-title">Skills & Education</h2>
          <p className="section-tagline">
            Building strong technical foundations through learning and real-world practice.
          </p>
          <div className="underline"></div>
        </div>

        <div className="skills-wrapper">

          {/* LEFT SIDE - SKILLS */}
          <div className="skills-card">

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

              <div className={`circle ${animate ? "fill-95" : ""}`}>
                <div className="circle-inner">95%</div>
                <span>React</span>
              </div>

              <div className={`circle ${animate ? "fill-90" : ""}`}>
                <div className="circle-inner">90%</div>
                <span>Python</span>
              </div>

              <div className={`circle ${animate ? "fill-88" : ""}`}>
                <div className="circle-inner">88%</div>
                <span>ML / AI</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - EDUCATION TIMELINE */}
          <div className="education-timeline">

            <div className="timeline-line"></div>

            {/* COLLEGE */}
            <div className="edu-item">

              <div className="edu-date">
                AUG '23 – PRESENT
                <br />
                Punjab, India
              </div>

              <div className="edu-content">
                <h3>Lovely Professional University</h3>

                <h4>
                  B.Tech – Computer Science & Engineering
                  <span className="cgpa-badge">CGPA: 7.65</span>
                </h4>
              </div>
            </div>

            {/* SENIOR SECONDARY */}
            <div className="edu-item">

              <div className="edu-date">
                APR '21 – MAR '22
                <br />
                Dausa, Rajasthan
              </div>

              <div className="edu-content">
                <h3>Bhagawati Senior Secondary School</h3>

                <h4>
                  Intermediate (Class XII)
                  <span className="cgpa-badge light">91%</span>
                </h4>
              </div>
            </div>

            {/* SECONDARY SCHOOL */}
            <div className="edu-item">

              <div className="edu-date">
                APR '16 – MAR '20
                <br />
                Dausa, Rajasthan
              </div>

              <div className="edu-content">
                <h3>Bharat Bal Vidya Mandir School</h3>

                <h4>
                  Matriculation (Class X)
                  <span className="cgpa-badge light">89.33%</span>
                </h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
