import { useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/common/Home";
import About from "./components/common/About";
import Resume from "./components/resume";
import Servies from "./components/services";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Hireme from "./components/hireme";
import Contact from "./components/contact";

function App() {
  useEffect(() => {
    /* Navbar control */
    const scrollElement = document.querySelectorAll(
      ".navbar-nav .nav-item .nav-link"
    );
    const sections = document.querySelectorAll(".sect");

    const handleNavBar = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const position = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= position - 130 && top < position + height) {
          scrollElement.forEach((element) => {
            element.classList.remove("active");
            if (id !== "home") {
              document
                .querySelector(".navbar-nav .nav-item a[href*=" + id + "]")
                .classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleNavBar);

    const tabs = document.querySelectorAll(".resume-left .tab");
    const pages = document.querySelectorAll(".page");

    const handleTabs = () => {
      const top = window.scrollY;
      pages.forEach((sec) => {
        const position = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= position - 500 && top < position + height) {
          tabs.forEach((element) => {
            if ([...element.classList].includes("current")) {
              element.classList.remove("current");
            }
            document
              .querySelector(".resume-left a[href*=" + id + "]")
              .classList.add("current");
          });
        }
      });
    };

    window.addEventListener("scroll", handleTabs);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
      window.removeEventListener("scroll", handleTabs);
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
      <Servies />
      <Projects />
      <Blogs />
      <Hireme />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
