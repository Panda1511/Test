const Card = ({ src, title, desc }) => {
  return (
    <div className="card-project">
      <a href="">
        <img src={src} alt="image-project" className="image" />
        <div className="desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
