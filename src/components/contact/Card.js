import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Card = ({ icon, title, info }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      className={clsx("contact-card", inView ? "visible" : "hidden")}
      ref={ref}
    >
      <div className="contact-card-wrapper">
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
        <div className="info">
          {info.link ? (
            info.link === "phone" ? (
              <a
                href={
                  "tel://" +
                  info.text.trim().replaceAll("+", "").replaceAll(" ", "")
                }
              >
                {info.text}
              </a>
            ) : info.link === "email" ? (
              <a href={"mailto:" + info.text}>{info.text}</a>
            ) : (
              <a href={info.text}>{info.text}</a>
            )
          ) : (
            <span>{info.text}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
