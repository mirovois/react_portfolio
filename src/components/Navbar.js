import React, { useState} from 'react';
import styled from "styled-components";
import { FaAlignCenter } from "react-icons/fa";


function Navbar() {
        const[isOpen,setIsOpen] = useState(false);
        const handleOpen = () =>{
            console.log("Opened!")
            setIsOpen(!isOpen);
            console.log(isOpen)

        }
    return (
        <nav>
            <div className="nav-wrapper">
            <button
                type="button"
                className="nav-btn"
                onClick={handleOpen}
            >
            <FaAlignCenter />
            </button>
            <ul className={isOpen ? "nav-links show-nav": "nav-links"}>
                <li>Home</li>
                <li>Projects</li>
                <li>Resume</li>
            </ul>

            </div>
            {/* <div className="link link1"><span>Home</span></div>
            <div className="link link2"><span>Projects</span></div>
            <div className="link"><span>Resume</span></div> */}
        </nav>
    )
}

export default Navbar
