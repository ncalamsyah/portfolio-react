import { Fade } from "@mui/material";
import React from "react";

const Frontend = ({ innerRef }) => {
  return (
    <Fade
      in={innerRef.skillsVisible}
      style={{ transformOrigin: "0 0 0" }}
      {...(innerRef.skillsVisible ? { timeout: 500 } : {})}
      unmountOnExit
    >
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Vue JS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">React JS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Tailwind</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">React JS</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Frontend;
