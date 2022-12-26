import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const navs = [
  {
    id: "#home",
    name: "Home",
  },
  {
    id: "#about",
    name: "About",
  },
  {
    id: "#resume",
    name: "Resume",
  },
  {
    id: "#services",
    name: "Services",
  },
  {
    id: "#projects",
    name: "Projects",
  },
  {
    id: "#blogs",
    name: "My Blog",
  },
  {
    id: "#contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={clsx("navbar-collapse", "collapse")} id="ftco-nav">
        <ul className={clsx("navbar-nav", "nav", toggle && "display")}>
          {navs.map((nav) => {
            return (
              <li className="nav-item" key={nav.id}>
                <a href={nav.id} className="nav-link">
                  <span>{nav.name}</span>
                </a>
              </li>
            );
          })}
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
