import Heading from "../common/Heading";
import Card from "./Card";
import Count from "./Count";
import * as images from "../../assets/projects_image";

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

const Projects = () => {
  return (
    <div id="projects" className="sect">
      <Heading text={"Projects"} />
      <p className="slogan">
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
      <Count />
    </div>
  );
};

export default Projects;
