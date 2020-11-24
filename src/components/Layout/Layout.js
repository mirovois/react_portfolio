import React, { useState } from 'react';
import Particles from '../ParticlesBackground';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


function Layout({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Particles />
            <Navbar  toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            {children}
        </>
    )
}

export default Layout;

