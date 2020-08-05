import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  IconButton,
  Divider,
  Icon,
} from "@material-ui/core";
import avatar from "../images/solo.jpg";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdf from "../resume_MyroslavVoysovych.pdf";
import Icons from "../components/Icons";
import iconJS from "../images/iconJS.svg";
import iconReact from "../images/iconReact.svg";
import iconHTML from "../images/iconHtml.svg";
import iconCSS from "../images/iconCss.svg";
import iconNode from "../images/iconNodejs.svg";
import iconBootstrap from "../images/iconBootstrap.svg";
import iconNpm from "../images/iconNpm.svg";
import iconFirebase from "../images/iconFireBase.svg";
import iconMysql from "../images/iconMysql.svg";
import iconAdobe from "../images/adobe.svg";
import iconGithub from "../images/iconGithub.svg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "72%",
    height: "80%",
    marginTop: "6rem",
    marginLeft: "7rem",
    marginBottom: "1rem",
    padding: "1rem",
    background: "-webkit-linear-gradient(to right, #4b6cb7, #182848)",
    background: "linear-gradient(to right, #4b6cb7, #182848)",
    zIndex: 1,
  },

  about: {
    marginRight: "15%",
    marginBottom: "2rem",
    margin: "auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  avatar: {
    width: "200px",
    height: "250px",
    // flex: "1 1 20rem",
  },
  desc: {
    flex: "2 15rem",
  },

  text: {
    padding: "0 1rem",
    textAlign: "justify",
    textIndent: "1rem",
    fontSize: "calc(0.7rem + 0.8vw)",
    lineHeight: "130%",
    color: "beige",
    fontFamily: "Bebas",
    marginBottom: "1rem",
  },
});
const icons = [
  { icon: iconHTML, name: "HTML5" },
  { icon: iconCSS, name: "CSS3" },
  { icon: iconJS, name: "JavaScript" },
  { icon: iconReact, name: "React" },
  { icon: iconNode, name: "NodeJS" },
  { icon: iconBootstrap, name: "Bootstrap" },
  { icon: iconNpm, name: "NPM" },
  { icon: iconFirebase, name: "FireBase" },
  { icon: iconMysql, name: "MySQL" },
  { icon: iconAdobe, name: "AdobeXD" },
  { icon: iconGithub, name: "GitHub" },
];

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton href={pdf} variant="raised">
        <PictureAsPdfIcon style={{ width: 60, height: 60 }} />
      </IconButton>
      <Typography
        variant="h4"
        display="inline"
        align="center"
        style={{ color: "beige", fontSize: "calc(1rem + 1vw" }}
      >
        Download Resume
      </Typography>

      <Typography
        paragraph
        variant="h2"
        align="center"
        style={{ color: "beige", fontFamily: "Vidaloka" }}
      >
        About me
      </Typography>
      <Box className={classes.about}>
        <Avatar src={avatar} className={classes.avatar} gutterBottom />
        <Box className={classes.desc}>
          <Typography className={classes.text} variant="h6" gutterBottom>
            Hello! I am front-end developer currently located in Montreal. I am
            pursuing the opportunity to begin my careeer in web development.
          </Typography>
          <Typography className={classes.text} variant="h6" gutterBottom>
            From my professional background as an engineer I aquired solid
            technical skills, learnt to work in a team and managed to finalize
            tasks depending on their priority and deadlines.
          </Typography>
          <Typography className={classes.text} variant="h6" gutterBottom>
            Therefore, when I developed an interest for programming I did not
            hesitate to turn my interest into a possible career. I enjoy
            learning about new technologies and a keen interest for web
            development with time has turned into a real passion.
          </Typography>
        </Box>
      </Box>
      <Divider variant="middle" height={10} />
      <Typography
        variant="h3"
        align="center"
        style={{
          color: "beige",
          fontFamily: "Vidaloka",
          margin: "2rem 1.5rem",
        }}
      >
        Skills
      </Typography>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={4}
        gutterBottom
        style={{ margin: "0 2rem" }}
      >
        {icons.map((icon) => (
          <Icons icon={icon.icon} name={icon.name} />
        ))}
      </Grid>
    </div>
  );
};

export default Resume;
