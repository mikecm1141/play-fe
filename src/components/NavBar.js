import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';

const NavBar = () => {
  return(
    <nav className="bottom-nav">
      <div>
        <NavLink to="/favorites" activeStyle="active">
          <i className="far fa-heart fa-5x fa-fw"></i>
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/" activeStyle="active">
          <i className="fas fa-search fa-5x fa-fw"></i>
        </NavLink>
      </div>
      <div>
        <NavLink to="/playlists" activeStyle="active">
          <i className="fas fa-music fa-5x fa-fw"></i>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
