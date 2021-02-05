import React from "react";
import CourseCard from "./CourseCard";

const completedCourses = [1, 2];
const menuItems = ["Start course again", "Rate this Course"];

const CompletedCourses = () => {
  return (
    <>
      {completedCourses.map((course) => (
        <CourseCard menuItems={menuItems}/>
      ))}
    </>
  );
};

export default CompletedCourses;
