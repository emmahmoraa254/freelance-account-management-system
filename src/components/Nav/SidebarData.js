import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Accounts',
    path: '/accounts',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Writers',
    path: '/writers',
    icon: <IoIcons.IoIosBook />,
    cName: 'nav-text',
  },
  {
    title: 'Orders',
    path: '/orders ',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <IoIcons.IoIosStats />,
    cName: 'nav-text',
  },
  {
    title: 'Finance',
    path: '/finance',
    icon: <IoIcons.IoLogoUsd />,
    cName: 'nav-text',
  },
  {
    title: 'Privacy Policy',
    path: '/policy',
    icon: <IoIcons.IoMdCheckmarkCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Terms and Conditions',
    path: '/termsandconditions',
    icon: <IoIcons.IoIosInformationCircle />,
    cName: 'nav-text',
  },
];
