import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import { Avatar, IconButton } from '@material-ui/core';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectItem.css';

const ProjectItem = ({name,image,desc,icon,source, link}) => {
    return (
        <div className="project__item">
            <LazyLoadImage 
                className="item__image"
                effect="blur"
                src={image}
                alt={name}
            />
            {/* <img src={image} alt={name} className="item__image" /> */}
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
