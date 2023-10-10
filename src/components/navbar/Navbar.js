import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import  logo  from "../images/logo.png";
import './styles.scss';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);
  return (
    <div className="nav-container">
      <div className="nav-img">
        <Link to="#" className="logo">
          <img src={logo} alt="logo"  width= '25px' height= '25px'/>
        </Link>
      </div>
      <nav className={Sidebar ? "showSidebar active" : "logo"}>
        { showSidebar } 
        <ul className="sidebar">
          {Sidebar.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
