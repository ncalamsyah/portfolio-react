import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Fade, Grow } from "@mui/material";

const Home = ({ innerRef }) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div ref={innerRef.homeRef} className="home__content grid">
          <Social innerRef={innerRef} />
          <Fade
            in={innerRef.homeVisible}
            style={{ transformOrigin: "0 0 0" }}
            {...(innerRef.homeVisible ? { timeout: 1000 } : {})}
            unmountOnExit
          >
            <div className="home__img"></div>
          </Fade>

          <Data innerRef={innerRef} />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
