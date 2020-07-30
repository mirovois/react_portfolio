import React from 'react';
import avatar from "../images/ava_Link.jpg";
import { makeStyles,useTheme } from "@material-ui/styles";
import { Box, Avatar,Typography } from "@material-ui/core";
import { Drawer} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    large:{
        width:150,
        height:150
    },
    hero:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    ava__Title:{
        color:"beige",
        fontFamily:"Bebas",
        fontWeight:"bold"
    }
}))

function Hero() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.hero}>
                <Avatar src={avatar} className={classes.large}/>
                <Typography variant="h5" className={classes.ava__Title}>
                    Myroslav Voysovych
                </Typography>
                <br/>
                <Typography variant="h7" className={classes.ava__Title}>
                    Front End Developer
                </Typography>
            </Box>
        </>
    )
}

export default Hero
