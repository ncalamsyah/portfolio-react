import { Grow } from "@mui/material";
import React from "react";
import "./qualification.css";

const Qualification = ({ innerRef }) => {
  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <section className="services section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button__flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button qualification__active button__flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div
          ref={innerRef.qualificationRef}
          className="qualification__sections"
        >
          <div className="qualification__content qualification__content-active">
            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 500 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Information System</h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Amikom University of Purwokerto
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </Grow>

            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 1000 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Frontend Developer Freelance
                  </h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Purwokerto Bluessummit
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> May 2022 - June
                    2022
                  </div>
                </div>
              </div>
            </Grow>

            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 1500 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Fullstack Developer Freelance
                  </h3>
                  <span className="qualification__subtitle">
                    {" "}
                    BUMDES Amanah
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Aug 2022 - Sept
                    2022
                  </div>
                </div>
              </div>
            </Grow>

            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 2000 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Backend Engineer Internship
                  </h3>
                  <span className="qualification__subtitle"> Privy ID</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Oct 2022 - Jan 2022
                  </div>
                </div>
              </div>
            </Grow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
