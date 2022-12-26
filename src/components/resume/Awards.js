import { memo } from "react";
import Heading from "./Heading";
import Card from "./Card";

const awards = [
  {
    date: "2014-2015",
    heading: "Top 10 Web Developer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Top 5 LeaderShip Exellence Winner",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    date: "2014-2015",
    heading: "Top 4 Web Tester",
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

const Awards = () => {
  return (
    <div id="awards" className="page">
      <Heading text={"Awards"} />
      <div className="awards-wrapper">
        {awards.map((edu, index) => {
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

export default memo(Awards);
