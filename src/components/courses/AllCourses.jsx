import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid, 
  Button, 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  courseCategory: {
    marginLeft: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const courses = [1, 2, 3, 4];

const Courses = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.courseCategory}
      >
        Most Popular Courses
      </Typography>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item key={course} xs={12} sm={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Course Title
                  </Typography>
                  <Typography>Course description</Typography>
                  <CardActions>
                    <Button size="small" color="primary">
                      Open
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Courses;
