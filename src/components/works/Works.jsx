import React, { useState } from "react";
import { Fade } from "@mui/material";
import "./works.css";
import { useEffect } from "react";
import { worksData } from "../data/Data";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const Works = ({ innerRef }) => {
  const [toggleState, setToggleState] = useState();
  const { x, y } = useMousePosition();
  const toggleTab = (id) => {
    setToggleState(id);
  };

  return (
    <section className="services section" id="works">
      <h2 className="section__title">Works</h2>
      <span className="section__subtitle">
        These are projects i've worked on
      </span>

      <Fade
        ref={innerRef.worksRef}
        in={innerRef.worksVisible}
        style={{ transformOrigin: "0 0 0" }}
        {...(innerRef.worksVisible ? { timeout: 700 } : {})}
      >
        <div className="services__container container grid">
          {worksData.map(({ id, name, img, role, desc, tech }, index) => (
            <div
              key={id}
              className="services__content"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="hover-reveal"
                style={{ transform: `translate(${x + 50}px, ${y - 200}px)` }}
              >
                <img className="hidden-img" src={img} alt="" />
              </div>
              <div className="works__content">
                <div className="hover-container">
                  <h3 className="services__title">{name}</h3>
                  <h5>{role}</h5>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                  View More{" "}
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
              </div>

              <div
                className={
                  toggleState === 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    className="uil uil-times services__modal-close"
                    onClick={() => toggleTab(0)}
                  ></i>

                  <h3 className="services__modal-title">{name}</h3>
                  <p className="services__modal-description">{desc}</p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{tech}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Works;
