import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar,Toolbar, IconButton,TextField, Typography, Hidden, Drawer, MenuList, MenuItem, CssBaseline } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 160;

const styles = theme => ({
  root: {
    display: 'flex',
    zIndex:1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor:"primary"
    },
  },
  appBar: {
    zIndex:theme.zIndex.drawer + 1,
    display:"flex"
    
  },
  menuButton: {
    marginRight: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar:{
    backgroundColor:"blue",
    background: "-webkit-linear-gradient(to right, #373b44, #4286f4)",
    background: "linear-gradient(#373b44, #4286f4)"
  },
  drawerPaper: {
    width: drawerWidth,
    background: "-webkit-linear-gradient(to right, #373b44, #4286f4)",
    background: "radial-gradient(#373b44, #4286f4)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    color:"beige"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  headerTitle:{
    textAlign:"center"
  }
});

 class Layout extends Component {
    
    
state ={
    mobileOpen:false
}
handleDrawerToggle = () => {
    this.setState({mobileOpen:!this.state.mobileOpen})
}

    render() {
        const { classes,children } = this.props;
        const { mobileOpen } = this.state;
        const drawer = (
            <div>
              <Hidden>
              <div className={classes.toolbar} />
              </Hidden>
             <MenuList>
                 <MenuItem component={Link} to="/">
                    About
                    <EmojiPeopleIcon />
                 </MenuItem>
                 <MenuItem component={Link} to="projects">
                    Projects
                    <EventNoteIcon /> 
                 </MenuItem>
                 <MenuItem component={Link} to="resume">
                    Resume
                    <HomeIcon />
                 </MenuItem>
             </MenuList>
            </div>
          );
         
    return (
            <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar} component="div">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
            style={{color:"black"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Portfolio
          </Typography>
          </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
       
        <Hidden >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            BackdropProps={{ invisible: true }}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children} 
      </main>
    </div>
        )
    }
}
export default withStyles(styles)(Layout)