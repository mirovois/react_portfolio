import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button} from "@material-ui/core";
import CardProject from "./CardProject";
import { Card, CardActions, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import cardsInfo from "../cards-data";

const useStyles = makeStyles((theme) => ({
    card:{
        
        maxWidth: 340,
        margin: "auto",
        transition: "0.3s",
    
    },
    cardActions:{  
        display:"flex",
        justifyContent:"space-between",
        margin:"0 10px"
            },
    button:{
        display:"flex",
        alignItems:"center",
        width:"100%"
    },
    gitIcon:{
        marginLeft:"10px"
    }
    }));
    
export default function Home() {
    const classes = useStyles();
    const [data, setData] =useState([]);
    useEffect(() => {
        const mydata = cardsInfo;
        setData(mydata)
        console.log(data);
    },[])
    
        return (
           <>
               <Container maxWidth="lg" className={classes.cardsContainer}>
                    <Typography variant="h2">
                        My articles
                    </Typography>
                    <Grid container spacing={10}>
                    {
                        data.map(card => 
                            ( <Grid item xs={12} sm={12} md={6} lg={4}>
                                <CardProject name={card.name}  desc={card.desc} image={card.image} link={card.link}/>
                                 </Grid>)
                        )
                    }
                    </Grid>
               </Container>
           </>
        )
    
}
