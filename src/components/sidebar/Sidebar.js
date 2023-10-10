import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from 'react-icons/fa6';
// import * as RiIcons from 'react-icons/ri';


export const Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'home'
    },
    {
        title: 'Menu',
        path: '/menu',
        icon: <FaIcons.FaTableList />,
        className: 'menu'
    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <AiIcons.AiOutlineSetting />,
        className: 'setting'
    },
    {
        title: 'Exit',
        path: '/exit',
        icon: <IoIcons.IoMdExit />,
        className: 'exit'
    }
]
