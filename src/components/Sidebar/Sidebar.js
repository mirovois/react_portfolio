import React from 'react'

import {IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {links} from '../../menu-data';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({isOpen, toggleSidebar}) => {
    return (
        <aside className={`sidebar ${isOpen ? "show__sidebar" : ""}`}>
           
                <IconButton className="close_btn" onClick={toggleSidebar}>
                    <CloseIcon />
                </IconButton>           
            <div class="sidebar__container">
                <ul className={`${isOpen ? "sidebar__links" : ""}`} >
                    {links.map(link =>( 
                        <li key={link.id} >
                        <NavLink to={link.url} exact className="sidebar__link-item">
                        {link.icon}
                        <p>{link.title}</p>
                        </NavLink>
                        </li>
                    ))
                    }         
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
