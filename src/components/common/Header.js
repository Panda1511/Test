import React, { useEffect, useState, memo } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  // handle the sticky-header
  useEffect(() => {
    const handleIsSticky = () =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);

    return () => {
      window.removeEventListener("scroll", handleIsSticky);
    };
  }, [isSticky]);

  return (
    <>
      <header id="header" className={isSticky ? "sticky" : ""}>
        <div className="container">
          <div className="navbar">
            <a to="/" className="navbar-brand">
              <span>R</span>onaldo
            </a>

            <nav className="nav_actions">
              <Navbar />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
