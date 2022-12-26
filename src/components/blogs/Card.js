import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";

const Card = ({ src, title, desc, date, author, comments }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      className={clsx("card-wrapper", inView ? "visible" : "hidden")}
      ref={ref}
    >
      <div className="image">
        <a href="#">
          <LazyLoadImage
            alt="image-blog"
            effect="blur"
            placeholderSrc={src}
            src={src}
          />
        </a>
      </div>
      <div className="desc">
        <a href="#" className="title">
          <h3>{title}</h3>
        </a>
        <a href="#" className="info">
          <div>
            <span>{date}</span>
            <span>{author}</span>
            <span className="comment">
              <FontAwesomeIcon icon="comment" />
              {comments}
            </span>
          </div>
        </a>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
