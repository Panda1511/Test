import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const { date, heading, title, desc } = props;
  return (
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon="lightbulb" />
      </div>
      <div className="content">
        <h4 className="date">{date}</h4>
        <h2 className="heading">{heading}</h2>
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
