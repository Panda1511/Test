import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";

const Card = ({ src, title, desc }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      className={clsx("card-project", inView ? "visible" : "hidden")}
      ref={ref}
    >
      <a href="">
        <LazyLoadImage
          alt="image-project"
          effect="blur"
          placeholderSrc={src}
          src={src}
          className="image"
        />
        <div className="desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
