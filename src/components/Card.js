import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'; // Import the toast functionality
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import "./card.css";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses(prev => prev.filter(id => id !== course.id));
      toast.error("Course unliked"); // Show an error toast for course unliked
    } else {
      setLikedCourses(prev => [...prev, course.id]);
      toast.success("Liked success"); // Show a success toast for course liked
    }
  };

  return (
    <div className="card">
      <img src={course.image.url} alt={course.image.alt} />
      <div>
        <button className="button" onClick={clickHandler}>
          {likedCourses.includes(course.id)? <FcLike fontSize="1.75rem " />: <FcLikePlaceholder  fontSize="1.75rem " />}
        </button>
      </div>
      <div className="card-details">
        <p className="title">{course.title}</p>
        <p className="description">{
          course.description.length>100?(course.description.substring(0,100)) + "...":(course.description)
        }
        </p>
      </div>
    </div>
  );
};

export default Card;
