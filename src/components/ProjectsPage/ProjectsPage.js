import { Divider } from '@material-ui/core';
import React from 'react';

import projects from '../../cards-data';
import ProjectItem from '../ProjectItem/ProjectItem';
import './ProjectsPage.css'

const ProjectsPage = () => {

    return (
        <div class="projects__container">
            <h1>List of projects</h1>
            <Divider variant="middle" height={10} />
            <div class="projects__list">
                
                {projects.map((item) => {
                return <ProjectItem key={item.id} {...item} />
                })}
                
             
            </div>
        </div>
        
    )
}

export default ProjectsPage;
