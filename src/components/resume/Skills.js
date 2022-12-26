import { memo } from "react";
import Heading from "./Heading";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "CSS",
    progress: 90,
    last_week: "28%",
    last_month: "60%",
  },
  {
    title: "HTML",
    progress: 80,
    last_week: "28%",
    last_month: "60%",
  },
  {
    title: "JQuery",
    progress: 75,
    last_week: "28%",
    last_month: "60%",
  },
];

const others = [
  {
    title: "Photoshop",
    progress: 90,
  },
  {
    title: "jQuery",
    progress: 85,
  },
  {
    title: "HTML5",
    progress: 95,
  },
  {
    title: "CSS3",
    progress: 90,
  },
  {
    title: "WordPress",
    progress: 70,
  },
  {
    title: "SEO",
    progress: 80,
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div id="skills" className="page">
      <Heading text={"Skills"} />
      <div className="skills-wrapper">
        {skills.map((item, index) => {
          return (
            <div key={index} className="skills_item">
              <h2 className="title">{item.title}</h2>

              <div className="pie-wrapper progress style-2">
                <span className="label">
                  {item.progress}
                  <span className="smaller">%</span>
                </span>
                <div
                  className="pie"
                  style={{
                    clip:
                      item.progress > 50 ? "rect(auto, auto, auto, auto)" : "",
                  }}
                >
                  <div
                    className="left-side half-circle"
                    style={{ transform: `rotate(${item.progress * 3.6}deg)` }}
                  ></div>
                  <div
                    className="right-side half-circle"
                    style={{
                      display: item.progress <= 50 ? "none" : "block",
                      transform: item.progress > 50 ? "rotate(180deg)" : "",
                    }}
                  ></div>
                </div>
                <div className="shadow"></div>
              </div>

              <div className="desc">
                <div className="desc-left">
                  <div className="number">{item.last_week}</div>
                  <span className="date">Last week</span>
                </div>
                <div className="desc-right">
                  <div className="number">{item.last_month}</div>
                  <span className="date">Last month</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="others">
        {others.map((item, index) => {
          return (
            <div
              className={clsx("skills-bar", inView ? "visible" : "hidden")}
              key={index}
              ref={ref}
            >
              <h3 className="top">
                <div className="title">{item.title}</div>
                <div className="progress">{item.progress}%</div>
              </h3>
              <div className="bottom">
                <div
                  className="above"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Skills);
