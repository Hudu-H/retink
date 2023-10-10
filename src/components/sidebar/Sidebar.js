import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa6";
import { Link } from "react-router-dom";
import  logo  from "../images/logo.png";
import "./styles.scss"

const Sidebar = () => {
  return (
    <div className="container">
      <div>
        <div className="nav-img">
          <Link to="#">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
      </div>
      <div>
        <div className="nav-home">
          <Link to="#" className="home">
          <AiIcons.AiFillHome />
          </Link>
        </div>
      </div>
      <div>
        <div className="nav-table">
          <Link to="#" className="table">
          <FaIcons.FaTableList />
          </Link>
        </div>
      </div>
      <div>
        <div className="nav-setting">
          <Link to="#" className="setting">
          <AiIcons.AiOutlineSetting />
          </Link>
        </div>
      </div>
      <div>
        <div className="nav-exit">
          <Link to="#" className="exit">
          <IoIcons.IoMdExit />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
