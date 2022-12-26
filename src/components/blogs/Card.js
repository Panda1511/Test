import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ src, title, desc, date, author, comments }) => {
  return (
    <div className="card-wrapper">
      <div className="image">
        <a href="#">
          <img src={src} alt="" />
        </a>
      </div>
      <div className="desc">
        <a href="#" className="title">
          <h3>{title}</h3>
        </a>
        <a href="#" className="info">
          <div>
            <span>{date}</span>
            <span>{author}</span>
            <span className="comment">
              <FontAwesomeIcon icon="comment" />
              {comments}
            </span>
          </div>
        </a>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
