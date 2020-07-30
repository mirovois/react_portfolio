import React, { Component } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {IconButton} from "@material-ui/core"

export class Footer extends Component {
    render() {
        return (
            <div>
                <IconButton
                variant="contained"
                onClick={this.handleDrawerToggle}
                style={{color:"white"}}
                href="https://www.linkedin.com/in/myroslavvoysovych/"
                >
                   <LinkedInIcon />
                </IconButton>
                <IconButton
                variant="outlined"
                onClick={this.handleDrawerToggle}
                style={{color:"white"}}
                href="https://github.com/"
                >
                   <GitHubIcon /> 
                </IconButton>
               
            </div>
        )
    }
}

export default Footer;
