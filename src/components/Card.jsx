import "../styles/css/Card.css";

function Card({ className, image, value, type }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-content">
        <div className="card-image">
          <img src={image} alt={type} />
        </div>
        <div className="card-value">
          <div className="value">{value}</div>
          <div className="type">{type}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
