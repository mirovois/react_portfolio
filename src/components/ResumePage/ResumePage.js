import { Divider, IconButton } from '@material-ui/core';
import React from 'react';
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdf from "../../resume.docx";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import solo from '../../images/solo.jpg'
import Skills from '../Skills';
import './Resume.css';

const ResumePage = () => {
    return (
        <main>
            <div className="resume__wrapper">
                <div className="pdf">
                    <IconButton href={pdf} target="_blank" variant="raised">
                        <PictureAsPdfIcon style={{ width: 40, height: 40 }} />
                    </IconButton>
                    <h1>Download Resume</h1>
                </div>
                <div className="resume">
                    <LazyLoadImage 
                      className="resume__image"
                      effect="blur" src={solo} alt="solo"
                    />
                    {/* <img className="resume__image" src={solo} alt="solo"/> */}
                    <div className="resume__info">
                        <h2 className="resume__title">About me</h2>
                        <Divider variant="middle" height={10} />
                        <div className="resume__desc">
                            <p className="p1">Hello! I am a front-end developer currently located in Montreal. I enjoy learning about new technologies and have a keen interest for web
                                development.</p>
                            <p className="p2">When I developed an interest for programming I did not
                                hesitate to turn it into a possible career. What turns me on is the ability of interpreting your ideas via programming in a way that other people could see it. </p>
                            <p className="p3">With time passing by I figured that this is something that changed my life significantly bringing in it new emotions and motivation.</p>
                        </div>
                        <Skills />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ResumePage
