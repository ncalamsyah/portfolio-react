import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">
          <span className="about__subtitle">Experience</span>
        </h3>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">
          <span className="about__subtitle">Completed</span>
        </h3>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">
          <span className="about__subtitle">Support</span>
        </h3>
      </div>
    </div>
  );
};

export default Info;
