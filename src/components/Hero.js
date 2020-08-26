import React from "react";
import avatar from "../images/ava_Link.jpg";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Box, Avatar, Typography } from "@material-ui/core";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: 260,
    height: 260,
    marginTop: "20%",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ava__Title: {
    color: "beige",
    fontFamily: "Bebas",
    fontWeight: "bold",
    borderTop: "4px solid #4286f4",
    // marginTop: "0.5rem",
    // lineHeight: "rem",
  },
  ava__TitleName: {
    fontFamily: "Kanit",
    color: "beige",
    fontWeight: "bold",
    letterSpacing: "2px",
    // borderBottom: "4px solid #4286f4",
    lineHeight: "2rem",
    marginBottom: "0.5rem",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.hero}>
        <Avatar
          src={
            "https://banner2.cleanpng.com/20180403/awe/kisspng-computer-icons-avatar-male-super-b-5ac405d5122261.8229479815227959890743.jpg"
          }
          className={classes.large}
        />
        <Typography variant="h4" className={classes.ava__TitleName}>
          Myroslav Voysovych
        </Typography>
        <br />
        <Typography variant="h5" className={classes.ava__Title}>
          Front End Developer
        </Typography>
      </Box>
    </>
  );
}

export default Hero;
