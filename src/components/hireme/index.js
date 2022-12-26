import { hire_me_bg } from "../../assets";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Hireme = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div id="hire_me" style={{ backgroundImage: `url(${hire_me_bg})` }}>
      <div className="overlay" />
      <div className={clsx("content", inView ? "visible" : "hidden")} ref={ref}>
        <h2 className="heading">
          I'm <span>Available</span> for freelancing
        </h2>
        <div className="slogan">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </div>
        <div className="btn btn-primary">hire me</div>
      </div>
    </div>
  );
};

export default Hireme;
