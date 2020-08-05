import React from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";

const Icons = (props) => {
  return (
    <>
      <Grid
        style={{ marginBottom: "2rem", color: "beige", fontWeight: 500 }}
        container
        xs={6}
        md={4}
        lg={3}
        alignItems="center"
        justify="flex-start"
        gutterBottom
      >
        <Avatar alt="JS" src={props.icon} sizes="md" />
        <Typography variant="h5">{props.name}</Typography>
      </Grid>
    </>
  );
};

export default Icons;
