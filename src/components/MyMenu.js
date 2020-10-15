import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = getTheme({
  paletteType: "light",
});
function getTheme(theme) {
  return createMuiTheme({
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === "light" ? "#ccc" : "#fff",
      },
    },
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List
      className={classes.root}
      component="nav"
      aria-label="main mailbox folders"
    >
      <ListItem
        component={Link}
        to="/"
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Abot" />
      </ListItem>

      <ListItem
        component={Link}
        to="projects"
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </List>
  );
}
