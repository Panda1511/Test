import Heading from "../common/Heading";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <FontAwesomeIcon icon="lightbulb" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FontAwesomeIcon icon="lightbulb" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FontAwesomeIcon icon="lightbulb" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FontAwesomeIcon icon="lightbulb" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FontAwesomeIcon icon="lightbulb" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FontAwesomeIcon icon="lightbulb" />,
    title: "Web Design",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div id="services" className="sect">
      <div className="container">
        <Heading text={"Services"} />
        <p className={clsx("slogan", inView ? "visible" : "hidden")} ref={ref}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="services-wrapper">
          {services.map((item, index) => {
            return (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
