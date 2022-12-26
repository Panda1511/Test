import Heading from "../common/Heading";
import Card from "./Card";
import Count from "./Count";
import * as images from "../../assets/projects_image";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    src: images.work1,
    title: "Branding & Illustration Design",
    desc: "Web Design",
  },
  {
    src: images.work2,
    title: "Branding & Illustration Design",
    desc: "Web Design",
  },
  {
    src: images.work3,
    title: "Branding & Illustration Design",
    desc: "Web Design",
  },
  {
    src: images.work4,
    title: "Branding & Illustration Design",
    desc: "Web Design",
  },
  {
    src: images.work5,
    title: "Branding & Illustration Design",
    desc: "Web Design",
  },
  {
    src: images.work6,
    title: "Branding & Illustration Design",
    desc: "Web Design",
  },
];

const counts = [
  { number: 100, title: "Awards" },
  { number: 1200, title: "Complete Projects" },
  { number: 1200, title: "Happy Customers" },
  { number: 500, title: "Cups of coffee" },
];

const Projects = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div id="projects" className="sect">
      <Heading text={"Projects"} />
      <p className={clsx("slogan", inView ? "visible" : "hidden")} ref={ref}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="projects-wrapper">
        {projects.map((item, index) => {
          return (
            <Card
              key={index}
              src={item.src}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
      <div className="projects-count sect">
        <div className="container">
          <div className="projects-count-wrapper">
            {counts.map((item, index) => {
              return (
                <Count key={index} title={item.title} number={item.number} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
