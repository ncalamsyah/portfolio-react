import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = ({ innerRef }) => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div
        ref={innerRef.skillsRef}
        className="skills__container container grid"
      >
        <Frontend innerRef={innerRef} />

        <Backend innerRef={innerRef} />
      </div>
    </section>
  );
};

export default Skills;
