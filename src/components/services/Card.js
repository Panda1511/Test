import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Card = ({ icon, title, desc }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      className={clsx("card-wrapper", inView ? "visible" : "hidden")}
      ref={ref}
    >
      <a href="">
        <div className="icon">{icon}</div>
        <div className="desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
