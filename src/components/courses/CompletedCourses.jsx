import React from "react";
import {Container, Grid} from "@material-ui/core";
import CourseCard from "./CourseCard";

const completedCourses = [1, 2];
const menuItems = ["Start course again", "Rate this Course"];

const CompletedCourses = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {completedCourses.map((course) => (
          <CourseCard menuItems={menuItems} />
        ))}
      </Grid>
    </Container>
  );
};

export default CompletedCourses;
