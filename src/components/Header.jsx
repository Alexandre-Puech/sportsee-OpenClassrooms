import logo from "../assets/sportsee_logo.svg";
import title from "../assets/sportsee_title.svg";
import "../styles/css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <img src={title} alt="SportSee" className="logo-title" />
      </div>
      <nav className="nav">
        <a href="#">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglages</a>
        <a href="#">Communauté</a>
      </nav>
    </div>
  );
}

export default Header;
