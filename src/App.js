import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref: homeRef, inView: homeVisible } = useInView();
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  const { ref: skillsRef, inView: skillsVisible } = useInView();
  const { ref: worksRef, inView: worksVisible } = useInView();
  const { ref: qualificationRef, inView: qualificationVisible } = useInView();
  const { ref: contactRef, inView: contactVisible } = useInView();

  return (
    <>
      <Header
        innerRef={{
          homeVisible,
          aboutVisible,
          skillsVisible,
          worksVisible,
          qualificationVisible,
          contactVisible,
        }}
      />
      <main className="main">
        <Home innerRef={{ homeRef, homeVisible }} />
        <About innerRef={{ aboutRef, aboutVisible }} />
        <Skills innerRef={{ skillsRef, skillsVisible }} />
        <Works innerRef={{ worksRef, worksVisible }} />
        <Qualification innerRef={{ qualificationRef, qualificationVisible }} />
        <Contact innerRef={{ contactRef, contactVisible }} />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
