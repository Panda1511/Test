const tabs = [
  { id: "tab1", text: "Education" },
  { id: "tab2", text: "Experience" },
  { id: "tab3", text: "Skills" },
  { id: "tab4", text: "Awards" },
];

const Tabs = () => {
  return (
    <div id="tabs">
      <ul>
        {tabs.map((tab) => {
          return (
            <li key={tab.id}>
              <a href={tab.id}>{tab.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
