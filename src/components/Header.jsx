import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      localStorage.setItem('visited', 'true');
      navigate('/about');
    }
  }, [navigate]);

  return (
    <div className="header">
      <h1 className='initials'>Kayden S Hardcastle</h1>
      <div className='menu'>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive || isHomePage ? 'nav-link-active' : 'nav-link')}
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
