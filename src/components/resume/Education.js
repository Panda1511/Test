import { memo } from "react";
import Heading from "./Heading";
import Card from "./Card";

const educations = [
  {
    date: "2014-2015",
    heading: "Bachelor of Science in Computer Science",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Computer Processing Systems/Computer Software",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Diploma in Computer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Art & Creative Director",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

const Education = () => {
  return (
    <div id="education" className="page">
      <Heading text={"Education"} />
      <div className="education-wrapper">
        {educations.map((edu, index) => {
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

export default memo(Education);
