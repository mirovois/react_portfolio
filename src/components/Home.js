import React, { Component } from 'react';
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    home:{
        
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        

    },
    footer:{
        display:"flex",
        marginTop:"4rem"
    }
    }));
    
export default function Home() {
    const classes = useStyles();

    
        return (
            <Box className={classes.home}>
                
                <Hero />
                <Box className={classes.footer}>
                <Footer />
                </Box>
            </Box>
        )
    
}