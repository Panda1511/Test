import React, { memo } from "react";
import {
  aboutImage,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from "../../assets";
import clsx from "clsx";
import useCounter from "../../hooks/useCounter";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [showPartner, setShowPartner] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const { counter } = useCounter(120, 50, show);

  React.useEffect(() => {
    if (inView) {
      setShowPartner(true);
    }
  }, [inView]);

  React.useEffect(() => {
    const subScroll = () => {
      const top = window.scrollY;
      if (top > 150) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", subScroll);

    return () => {
      window.removeEventListener("scroll", subScroll);
    };
  }, []);

  return (
    <div id="about" className="sect">
      <div className="container">
        <div className={`about_wrapper`}>
          <div className="about_item_image">
            <LazyLoadImage
              alt="author-image"
              effect="blur"
              placeholderSrc={aboutImage}
              src={aboutImage}
            />
          </div>
          <div className={clsx("about_item_text", show ? "visible" : "hidden")}>
            <h2>About Me</h2>
            <h3 className="about_goals">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </h3>
            <ul className="about_info">
              <li>
                <span>Name:</span>
                <span>Ronaldo Fredrickson</span>
              </li>
              <li>
                <span>Date of birth:</span>
                <span>November 28, 1989</span>
              </li>
              <li>
                <span>Address:</span>
                <span>San Francisco CA 97987 USA</span>
              </li>
              <li>
                <span>Zip code:</span>
                <span>1000</span>
              </li>
              <li>
                <span>Email:</span>
                <span>ronaldo@gmail.com</span>
              </li>
              <li>
                <span> Phone:</span>
                <span>+1-2234-5678-9-0</span>
              </li>
            </ul>
            <div className="about_projects_count">
              <span>{counter}</span> Project complete
            </div>
            <div className="btn btn-primary">download cv</div>
          </div>
        </div>
        <div
          className={clsx("partner", showPartner ? "visible" : "hidden")}
          ref={ref}
        >
          <div>
            <a href="">
              <img src={partner1} alt="partner-logo" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={partner2} alt="partner-logo" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={partner3} alt="partner-logo" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={partner4} alt="partner-logo" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={partner5} alt="partner-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
