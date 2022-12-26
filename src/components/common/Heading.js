import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Heading = ({ text }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <h2
      className={clsx("heading-section", inView ? "visible" : "hidden")}
      ref={ref}
    >
      {text}
    </h2>
  );
};

export default Heading;
