const counts = [
  { number: 100, title: "Awards" },
  { number: 1200, title: "Complete Projects" },
  { number: 1200, title: "Happy Customers" },
  { number: 500, title: "Cups of coffee" },
];
const Count = () => {
  return (
    <div className="projects-count sect">
      <div className="container">
        <div className="projects-count-wrapper">
          {counts.map((item, index) => {
            return (
              <div className="count-item" key={index}>
                <h3 className="number">{item.number}</h3>
                <p className="title">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Count;
