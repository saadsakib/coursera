import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarButton: {
    margin: theme.spacing(1, 2),
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Coursera
        </Typography>
        <Button
          variant="contained"
          size="small"
          component={RouterLink}
          to="/signup"
          className={classes.toolbarButton}
        >
          Sign up
        </Button>
        <Button
          variant="contained"
          size="small"
          component={RouterLink}
          to="/signin"
          className={classes.toolbarButton}
        >
          Sign in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;