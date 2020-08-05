import React from "react";
import avatar from "../images/ava_Link.jpg";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Box, Avatar, Typography } from "@material-ui/core";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: 260,
    height: 260,
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
        <Typography variant="h4" className={classes.ava__Title}>
          Myroslav Voysovych
        </Typography>
        <br />
        <Typography variant="h6" className={classes.ava__Title}>
          Front End Developer
        </Typography>
      </Box>
    </>
  );
}

export default Hero;
