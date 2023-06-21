import { Link } from "react-router-dom";
import Logo from "./Logo";
import Boards from "./Boards";
import Help from "./Help";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Boards />
      <Help />
      {/* <Link>Log out</Link> */}
    </aside>
  );
};

export default Sidebar;
