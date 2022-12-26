import React from "react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import useCounter from "../../hooks/useCounter";

const Count = ({ number, title }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [show, setShow] = React.useState(false);
  const { counter } = useCounter(number, 50, show);

  React.useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <div
      className={clsx("count-item", inView ? "visible" : "hidden")}
      ref={ref}
    >
      <h3 className="number">{counter}</h3>
      <p className="title">{title}</p>
    </div>
  );
};

export default Count;
