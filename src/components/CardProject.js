import React, {useState } from 'react';
import { Box, Card, CardActions, CardActionArea, CardContent, CardMedia,Typography, Button, Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import data from "../cards-data";
import iconjs from "../images/iconJS.svg"


const useStyles = makeStyles((theme) => ({

    card:{
        
        maxWidth: 340,
        height:415,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        margin: "auto",
        transition: "0.3s",
        },
    cardMedia:{
        objectFit:"fill"
    },
    cardHeader:{
        display:"flex",
        justifyContent:"space-between"
    },
    cardActions:{  
        display:"flex",
        justifyContent:"space-between",
        margin:"0 10px"
            },
    button:{
        display:"flex",
        alignItems:"center",
        width:"100%",
        marginBottom:"1rem"
    },
    gitIcon:{
        marginLeft:"10px"
    }
    }));

function CardProject(props) {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.cardMedia}
                                component="img"
                                alt="Banking App"
                                height="220" 
                                width="100%"                             
                                image={props.image}
                                title="JS project"
                                
                                />
                                <CardContent>
                                <Box className={classes.cardHeader}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                <Avatar alt="Remy Sharp" src={iconjs} />
                                </Typography>
                                    </Box>   
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.desc}
                                </Typography>
                                </CardContent>
                              </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                    <Button
                                    className={classes.button}
                                    variant="contained" 
                                    color="primary"
                                    href={props.link}
                                    >                                   
                                    <Typography>
                                        Check Source
                                    </Typography>
                                    <GitHubIcon  className={classes.gitIcon}/>
                                </Button>                               
                            </CardActions>
                            </Card>
        </>
    )
}

export default CardProject
