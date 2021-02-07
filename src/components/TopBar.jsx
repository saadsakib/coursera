import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Link,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { deepOrange } from "@material-ui/core/colors";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flex: 1,
    color: "#fff",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const TopBar = (props) => {
  const classes = useStyles();

  const { authenticated } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accountInfo = (
    <>
      <Avatar className={classes.orange}>N</Avatar>
      <Typography variant="subtitle2">Your Name</Typography>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ExpandMore />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to="/signin" underline="none">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link
          component={RouterLink}
          to="/home"
          className={classes.toolbarTitle}
          underline="none"
        >
          <Typography component="h2" variant="h4" noWrap align="left">
            Coursera
          </Typography>
        </Link>
        {authenticated ? accountInfo : null}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
