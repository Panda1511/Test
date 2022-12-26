import { memo } from "react";
import Heading from "./Heading";
import Card from "./Card";

const experiences = [
  {
    date: "2014-2015",
    heading: "Software Developer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Web Designer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Web Marketing",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Art & Creative Director",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Wordpress Developer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "UI/UX Designer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="page">
      <Heading text={"Experience"} />
      <div className="experience-wrapper">
        {experiences.map((edu, index) => {
          return (
            <Card
              key={index}
              date={edu.date}
              heading={edu.heading}
              title={edu.title}
              desc={edu.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(Experience);
