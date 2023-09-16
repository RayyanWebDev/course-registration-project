/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Course from "../Course/Course";
const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const handleCourses = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);
    console.log(isExist);

    let totalCount = course.credits;
    if (isExist) {
      alert("Course already exists");
    } else {
      selectedCourses.forEach((item) => {
        totalCount += item.credits;
      });

      const totalRemaining = 20 - totalCount;

      if (totalCount > 20) {
        return alert("No more credits available");
      } else {
        setRemaining(totalRemaining);
        setTotalCost(totalCount);
        const newSelectedCourses = [...selectedCourses, course];
        setSelectedCourses(newSelectedCourses);
      }
    }
  };

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  console.log(allCourses);
  return (
    <div>
      <h1 className="mb-10 mt-8 text-center text-2xl font-semibold">
        Course Registration
      </h1>

      <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-3 justify-center ">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="w-72 border-transparent border-4  bg-slate-100 rounded-lg "
            >
              <img className="mt-2 " src={course.img} alt="" />
              <h3 className="text-1xl font-semibold text-center mt-2 mb-2">
                {" "}
                {course.courseName}{" "}
              </h3>
              <p className="text-xs mb-5 text-center"> {course.details} </p>
              <div className="flex gap-20 justify-center">
                <p className="text-sm font-medium">
                  <FontAwesomeIcon icon={faDollarSign} /> Price: {course.price}
                </p>

                <p className="text-sm font-medium">
                  <FontAwesomeIcon icon={faBookOpen} />
                  {"   "} Credit: {course.credits} hr
                </p>
              </div>
              <button
                onClick={() => handleCourses(course)}
                className="mt-3 mb-2 border-transparent border-4 w-64 bg-blue-500 rounded-lg text-white text-lg font-semibold"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="">
          <Course
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalCost={totalCost}
          ></Course>
        </div>
      </div>
    </div>
  );
};

export default Courses;
