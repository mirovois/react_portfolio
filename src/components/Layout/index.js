import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import EventNoteIcon from "@material-ui/icons/EventNote";
import HomeIcon from "@material-ui/icons/Home";
import AddIcCallSharpIcon from '@material-ui/icons/AddIcCallSharp';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  MenuList,
  MenuItem,
  CssBaseline,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 155;

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
  main__header: {
    [theme.breakpoints.up("xs")]: {
      paddingRight: "4rem",
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
    fontSize: "3rem",
    "&:focus": {
      backgroundColor: theme.palette.primary.dark,
      // fontSize: "1.3rem",
      // transform: "scale(1.07)",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.light,
    },
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
          <StyledMenuItem component={NavLink} to="/" activeClassName="selected">
            <HomeIcon fontSize="large" />
            <ListItemText
              primary={<Typography variant="h5">About</Typography>}
            />
          </StyledMenuItem>

          <StyledMenuItem
            button
            component={NavLink}
            to="projects"
            activeClassName="selected"
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
          >
            <AssignmentSharpIcon fontSize="large" />
            <ListItemText
              primary={<Typography variant="h5">Resume</Typography>}
            />
          </StyledMenuItem>

          <StyledMenuItem
            component={NavLink}
            to="contacts"
            activeClassName="selected"
          >
            <AddIcCallSharpIcon fontSize="large" />
            <ListItemText
              primary={<Typography variant="h5">Contact</Typography>}
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
