import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./styles.scss";
import SidebarMobile from "./sidebar.mobile";
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  {
    isMobile ? <SidebarMobile /> : <Sidebar />;
  }
  return (
    <div className="container">
      <div className="nav">
        <Link to="#">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="nav">
        <Link to="#home" className="home">
          <AiIcons.AiFillHome />
        </Link>
      </div>
      <div className="nav">
        <Link to="#" className="table">
          <FaIcons.FaTableList />
        </Link>
      </div>
      <div className="nav">
        <Link to="#" className="setting">
          <AiIcons.AiOutlineSetting />
        </Link>
      </div>
      <div className="nav">
        <Link to="#" className="exit">
          <IoIcons.IoMdExit />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
