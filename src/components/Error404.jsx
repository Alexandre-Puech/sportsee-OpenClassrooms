import "../styles/css/Error.css";

function Error404() {
  return (
    <div className="error404-body">
      <p className="error404-icon">404</p>
      <p className="error404-message">
        Oups! L'utilisateur que vous demandez n'existe pas.
      </p>
    </div>
  );
}
export default Error404;
