import yoga from "../assets/Buttons icons/yoga.svg";
import swimming from "../assets/Buttons icons/swimming.svg";
import cycling from "../assets/Buttons icons/cycling.svg";
import dumbbell from "../assets/Buttons icons/dumbbell.svg";
import "../styles/css/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-buttons">
        <button className="sidebar-button">
          <img src={yoga} alt="yoga" className="yoga-button" />
        </button>
        <button className="sidebar-button">
          <img src={swimming} alt="swimming" className="swimming-button" />
        </button>
        <button className="sidebar-button">
          <img src={cycling} alt="cycling" className="cycling-button" />
        </button>
        <button className="sidebar-button">
          <img src={dumbbell} alt="dumbbell" className="yoga-dumbbell" />
        </button>
      </div>
      <p className="copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}
export default Sidebar;
