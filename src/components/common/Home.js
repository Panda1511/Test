import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";

const roles = [
  "Web Designer.",
  "Developer.",
  "Photographer.",
  "Marketer.",
  "Blogger",
];

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: roles,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="sect">
      <div className="container">
        <div className="overlay"></div>
        <div className={`wrapper home_wrapper`}>
          <div className="home_item_txt" style={{ width: "100%" }}>
            <h3>hey! i'am</h3>
            <h2 className="home_author">Ronaldo Fredrickson</h2>
            <h2>
              I'm a <span ref={el}></span>
            </h2>
          </div>
        </div>
        <div className="mouse">
          <div className="mouse-icon">
            <FontAwesomeIcon
              icon="arrow-down-long"
              style={{ marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
