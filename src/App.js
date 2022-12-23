import { useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/common/Home";
import About from "./components/common/About";
import Resume from "./components/resume/Resume";

function App() {
  useEffect(() => {
    const scrollElement = document.querySelectorAll(
      ".navbar-nav .nav-item .nav-link"
    );
    const sections = document.querySelectorAll(".sect");

    const handleNavBar = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const height = sec.offsetHeight;
        const position = sec.offsetTop - 300;
        const id = sec.getAttribute("id");

        if (top >= position && top < position + height) {
          scrollElement.forEach((element) => {
            element.classList.remove("active");
            document
              .querySelector(".navbar-nav .nav-item a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleNavBar);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
