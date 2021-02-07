import React from "react";
import {
  Button,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Courses from "../components/courses";
import TopBar from "../components/TopBar";

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
      <TopBar authenticated={true}/>
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
        </div>
        <Courses />
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>
    </React.Fragment>
  );
};

export default HomePage;
