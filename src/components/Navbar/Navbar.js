import React, { useState } from 'react';

import './Navbar.css';
import {NavLink} from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {links} from '../../menu-data';


const Navbar = ({toggleSidebar}) => {
    return (
        <nav>
                <h2 className="nav__logo">MIRO PORTFOLIO</h2>
                <ul className="nav__links">
                  {links.map(link =>(   
                      <li key={link.id}>
                        <NavLink  exact to={link.url} className="link__item"
                        activeClassName="active">
                        {link.icon}
                        <p>{link.title}</p>
                        </NavLink>           
                      </li>              
                  ))
                 }         
                </ul>
                <IconButton onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
        </nav>
    )
}
export default Navbar
