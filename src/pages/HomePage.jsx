import React from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Courses from "../components/courses";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarButton: {
    margin: theme.spacing(1, 2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
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
      <main>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Coursera
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Learn from amazing people around the world.
          </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Explore
              </Button>
            </Grid>
          </Grid>
        </div>
        <Courses />
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </React.Fragment>
  );
};

export default HomePage;
