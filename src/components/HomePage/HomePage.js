import React from "react";
import avatar from "../../images/ava_Link.jpg";
import Hero from "../Hero";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import "./Home.css"


export default function HomePage() {
  
  return (
    <main>
      <div className="home">
        <div className="home__hero">
          {/* <div className="home__info"> */}
            <h1>Myroslav Voysovych</h1>
            <br />
            <p>Free-lance front-end developer</p>
          {/* </div> */}
          <div className="home__icons">
          <IconButton 
            href="https://www.linkedin.com/in/myroslavvoysovych/"
          >
            <LinkedInIcon style={{fontSize:40, padding:0}}/>
          </IconButton>
          <IconButton href="https://github.com/">
            <GitHubIcon
              style={{ fontSize:36, padding:0 }}
            />
          </IconButton>
          </div>
        </div>
        <div className="home__avatar" >
          <Avatar src={avatar} className="home__avatar" />
        </div>
      </div>

    </main>
  );
}
