import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";
import clsx from "clsx";

const roles = [
  "Web Designer.",
  "Developer.",
  "Photographer.",
  "Marketer.",
  "Blogger",
];

const Home = () => {
  const [show, setShow] = React.useState(false);
  const el = React.useRef(null);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

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
    <div id="home" className="sect" ref={ref}>
      <div className="container">
        <div className="overlay"></div>
        <div className={`wrapper home_wrapper`}>
          <div
            className={clsx("home_item_txt", show ? "visible" : "hidden")}
            style={{ width: "100%" }}
          >
            <h3>hey! i'am</h3>
            <h2 className="home_author">Ronaldo Fredrickson</h2>
            <h2>
              I'm a <span ref={el}></span>
            </h2>
          </div>
        </div>
        <div className="mouse">
          <div className="mouse-icon">
            <a href="#resume">
              <FontAwesomeIcon
                icon="arrow-down-long"
                style={{ marginRight: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
