import React from "react";
import "./../styles/experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="experience-header">
          <h2>Experience & Education</h2>
          <div className="underline"></div>
        </div>

        {/* ITEM 1 */}
        <div className="experience-item">
          <div className="experience-date">
            JUN '25 - JUL '25
          </div>

          <div className="experience-content">
            <h3>Machine Learning Training</h3>
            <h4>Hands-on ML Implementation</h4>
            <p>
              Applied SQL for data extraction and implemented ML workflows
              using Python, NumPy, and Scikit-learn.
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="experience-item">
          <div className="experience-date">
            AUG '23 - PRESENT
          </div>

          <div className="experience-content">
            <h3>Lovely Professional University</h3>
            <h4>B.Tech Computer Science & Engineering</h4>
            <p>
              Maintaining a CGPA of 7.65 while focusing on algorithmic
              thinking and structured problem solving.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
