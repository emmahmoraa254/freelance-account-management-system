import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Profile from '../Profile/Profile';
import './SideNav.css';
import { IconContext } from 'react-icons';

function SideNav() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className='navbar'>
          <div className='logo'>
            <div className='nav-logo'>
              <img src='./logo.jpeg' height={80} />
            </div>
            <h1> Shirwil </h1>
          </div>

          <div className='nav-icons'>
            <Link to='#'>
              <IoIcons.IoMdHelpCircle />
            </Link>

            <i to='#' claclassName='nav-icons' ssName='nav-icons'>
              <IoIcons.IoMdNotifications />
            </i>

            <h3>Username</h3>
            <Profile />
          </div>
        </div>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <h2>Management</h2>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <ul></ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNav;
