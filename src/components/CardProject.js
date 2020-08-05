import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Avatar,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import data from "../cards-data";
import iconjs from "../images/iconJS.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    height: 485,
    background: "#4286f4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
    transition: "0.3s",
  },
  header: {
    height: "4rem",
  },
  cardMedia: {
    objectFit: "fill",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "1rem",
  },
  gitIcon: {
    marginLeft: "10px",
  },
}));

function CardProject(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} shadow={5}>
        <CardHeader
          className={classes.header}
          title={<Typography variant="h5">{props.name}</Typography>}
          avatar={<Avatar alt="Remy Sharp" src={props.icon} sizes="md" />}
        />
        <CardActionArea spacing={1}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Banking App"
            height="220"
            width="100%"
            image={props.image}
            title="JS project"
          />
          <CardContent spacing={2}>
            <Typography variant="body1" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href={props.source}
          >
            <Typography>Source</Typography>
            <GitHubIcon className={classes.gitIcon} />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href={props.link}
          >
            <Typography>Demo</Typography>
            <CodeIcon className={classes.gitIcon} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardProject;
