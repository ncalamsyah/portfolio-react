import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const { ref: homeRef, inView: homeVisible } = useInView();
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  const { ref: skillsRef, inView: skillsVisible } = useInView();

  // const aboutRef = useRef();
  // const [aboutVisible, setAboutVisible] = useState();
  // console.log("aboutVisible ", aboutVisible);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setAboutVisible(entry.isIntersecting);
  //   });
  //   observer.observe(aboutRef.current);
  // });
  return (
    <>
      <Header innerRef={{ homeVisible, aboutVisible, skillsVisible }} />
      <main className="main">
        <Home innerRef={{ homeRef, homeVisible }} />
        <About innerRef={{ aboutRef, aboutVisible }} />
        <Skills innerRef={{ skillsRef, skillsVisible }} />
        <Services />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
