import React, { useState } from "react";
import Card from "./Card";
import "./cards.css";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  // Function to retrieve an array of courses received from the API
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }
    else{
      return courses[category];
    }
  };

  return (
    <div className="cards">
      {getCourses().map((course, index) => (
        <Card
          course={course}
          key={index}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
