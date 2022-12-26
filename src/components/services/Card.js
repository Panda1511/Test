const Card = ({ icon, title, desc }) => {
  return (
    <div className="card-wrapper">
      <a href="">
        <div className="icon">{icon}</div>
        <div className="desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
