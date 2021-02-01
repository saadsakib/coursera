import React from "react";
import "./primitive.css";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <p>home page</p>

      <ul>
        {props.subjects.map((subject) => (
          <li>
            <span>{subject.name}</span>
            <span>{subject.enrolled ? "Enrolled" : "Not enrolled"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
