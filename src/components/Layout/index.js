import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import EventNoteIcon from "@material-ui/icons/EventNote";
import HomeIcon from "@material-ui/icons/Home";
// import MyMenu from "../MyMenu";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Typography,
  Hidden,
  Drawer,
  MenuList,
  MenuItem,
  CssBaseline,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 140;

const styles = (theme) => ({
  tab: {
    display: "flex",
    flexDirection: "column",
  },

  root: {
    display: "flex",
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    background: "-webkit-linear-gradient(to right, #373b44, #4286f4)",
    background: "linear-gradient(#373b44, #4286f4)",
    display: "flex",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "transparent",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "beige",
    zIndex: 10,
  },

  headerTitle: {
    textAlign: "center",
  },
});

const StyledMenuItem = withStyles((theme) => ({
  root: {
    fontSize: "4rem",

    padding: "1rem 0.5rem",
    "&:focus": {
      backgroundColor: theme.palette.primary.dark,
      fontSize: "1.8rem",
      transform: "scale(1.1)",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  item: {
    fontSize: "4rem",
  },
}))(MenuItem);

class Layout extends Component {
  state = {
    mobileOpen: false,
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;
    const drawer = (
      <div>
        <Hidden>
          <div className={classes.toolbar} />
        </Hidden>

        <MenuList>
          <StyledMenuItem
            component={NavLink}
            button
            exact
            to="/"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "400",
              color: "#42a5f5",
            }}
          >
            <HomeIcon fontSize="large" />
            <ListItemText
              primary={<Typography variant="h5">About</Typography>}
            />
          </StyledMenuItem>

          <StyledMenuItem
            component={NavLink}
            to="projects"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "#42a5f5",
            }}
          >
            <EventNoteIcon fontSize="large" />
            <ListItemText
              primary={<Typography variant="h5">Projects</Typography>}
            />
          </StyledMenuItem>

          <StyledMenuItem
            component={NavLink}
            to="resume"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "#42a5f5",
            }}
          >
            <EmojiPeopleIcon fontSize="large" />
            <ListItemText
              primary={<Typography variant="h5">Resume</Typography>}
            />
          </StyledMenuItem>
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
              style={{ color: "black" }}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Box style={{ textAlign: "center", flexGrow: 1 }}>
              <Typography variant="h6" noWrap>
                My Portfolio
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
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
    );
  }
}
export default withStyles(styles)(Layout);
