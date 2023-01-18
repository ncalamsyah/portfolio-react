import { Fade } from "@mui/material";
import React from "react";

const Backend = ({ innerRef }) => {
  return (
    <Fade
      in={innerRef.skillsVisible}
      style={{ transformOrigin: "0 0 0" }}
      {...(innerRef.skillsVisible ? { timeout: 1000 } : {})}
      unmountOnExit
    >
      <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">PostgreSQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Golang</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Codeigniter</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Laravel</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Docker</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Firestore</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="">
                <h3 className="skills__name">Postman</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Backend;
