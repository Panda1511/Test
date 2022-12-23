import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={clsx("navbar-collapse", "collapse")} id="ftco-nav">
        <ul className={clsx("navbar-nav", "nav", toggle && "display")}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">
              <span>Resume</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <span>Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">
              <span>My Blog</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <div className="bars" onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon="bars" />
          <span>Menu</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
