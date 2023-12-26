import React from "react";
import "./filter.css";

const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
      setCategory(title);
  }
  return (
    <div className="filter">
      {filterData.map((data, index) => (
        <button key={index} onClick={()=>filterHandler(data.title)}>
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
