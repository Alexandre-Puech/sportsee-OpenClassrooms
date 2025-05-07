import "../styles/css/Title.css";

function Title({ name, subtitle }) {
  return (
    <div className="title">
      <div className="title-header">
        <p className="hello">Bonjour</p>
        <p className="name">{name}</p>
      </div>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
export default Title;
