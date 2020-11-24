import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";

import './ProjectItem.css';
import { Avatar, IconButton } from '@material-ui/core';

const ProjectItem = ({name,image,desc,icon,source, link}) => {
    return (
        <div className="project__item">
            <img src={image} alt={name} className="item__image" />
            <div className="item__info">
                <div className="item__header">
                    <h4>{name}</h4>
                    <Avatar src={icon} style={{fontSize:20, padding:"3px"}} size="small"/>
                </div>
                <p>{desc}</p>
                
                <div className="item__icons">
                    <IconButton href={link} >
                        <CodeIcon style={{fontSize:30, padding:"0px"}}/>
                    </IconButton>

                    <IconButton href={source}>
                        <GitHubIcon style={{ fontSize:30, padding:"0px" }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
