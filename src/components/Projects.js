import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
import CardProject from "./CardProject";
import { makeStyles } from "@material-ui/core/styles";
import cardsInfo from "../cards-data";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    width: "73%",
    marginTop: "6rem",
    marginLeft: "6rem",
    marginBottom: "1rem",
  },
  header: {
    color: "blue",
  },
  card: {
    maxWidth: 340,
    margin: "auto",
    transition: "0.3s",
  },
  container: {
    padding: "2rem 1rem",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const mydata = cardsInfo;
    setData(mydata);
    console.log(data);
  }, []);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={10} justify="center">
          {data.map((card) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <CardProject
                name={card.name}
                desc={card.desc}
                image={card.image}
                source={card.source}
                link={card.link}
                icon={card.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
