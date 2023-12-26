import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
import "./app.css";

const App = () => {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(output.data); // Check the fetched data in the console
        setCourses(output.data); // Update courses state with the fetched data
      } catch (error) {
        toast.error("Error fetching data:", error);
      }

      setLoading(false);
    };

    fetchData(); // Call the fetchData function to initiate data fetching
  }, []);

  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} setCategory={setCategory} category={category} />
      </div>

      <div>{loading ? <Spinner /> : <Cards courses={courses}  category={category} />}</div>
    </div>
  );
};

export default App;
