import React from "react";
import { Container, Grid } from "@material-ui/core";
import CourseCard from "./CourseCard";

const inProgressCourses = [1, 2, 3, 4];
const menuItems = ["Reset deadlines", "Rate this Course", "Unenroll"];

const InProgressCourses = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {inProgressCourses.map((course) => (
          <CourseCard menuItems={menuItems} />
        ))}
      </Grid>
    </Container>
  );
};

export default InProgressCourses;
