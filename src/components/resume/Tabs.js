import clsx from "clsx";

const tabs = [
  { id: "education", text: "Education" },
  { id: "experience", text: "Experience" },
  { id: "skills", text: "Skills" },
  { id: "awards", text: "Awards" },
];

const Tabs = ({ inViewport }) => {
  return (
    <div id="tabs" className={clsx(inViewport && "fixed")}>
      <ul>
        {tabs.map((tab) => {
          return (
            <li key={tab.id}>
              <a href={"#" + tab.id} className="tab">
                {tab.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
