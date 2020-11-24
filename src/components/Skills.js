import React from 'react';
import Icons from './Icons';
import iconJS from "../images/iconJS.svg";
import iconReact from "../images/iconReact.svg";
import iconHTML from "../images/iconHtml.svg";
import iconCSS from "../images/iconCss.svg";
import iconNode from "../images/iconNodejs.svg";
import iconGatsby from "../images/gatsby__icon.png"

import './Skills.css';
import { Avatar } from '@material-ui/core';

const icons = [
    { icon: iconHTML, name: "HTML5" },
    { icon: iconCSS, name: "CSS3" },
    { icon: iconJS, name: "JavaScript" },
    { icon: iconReact, name: "React" },
    { icon: iconGatsby, name: "GatsbyJS" },
    { icon: iconNode, name: "NodeJS" }
  ];

const Skills = () => {
    return (
        <div className="skills">
            {icons.map(icon => (
                <div className="skill" >
                    <span className="skill__title">{icon.name}</span>
                    <Avatar className="skill__icon" src={icon.icon} />
                </div>
            ))}
        </div>
    )
}

export default Skills
