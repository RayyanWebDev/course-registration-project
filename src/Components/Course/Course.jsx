const Course = ({ selectedCourses, remaining, totalCost }) => {
  console.log(selectedCourses);
  return (
    <>
      <div className="bg-slate-100 rounded-xl h-80 ml-10 w-72">
        <br />
        <h3 className="text-blue-500 text-lg font-bold mb-2 ml-1 ">
          Credit hour remaining {remaining}hour
        </h3>
        <hr className="border-neutral-400" />
        <h3 className="text-xl font-bold mb-6 ml-14">Course Name </h3>

        {selectedCourses.map((course) => (
          <ol key={course.id}>
            <li>{course.courseName}</li>
          </ol>
        ))}
        <br />
        <hr className="border-neutral-400" />
        <h3 className="ml-2 mt-2 mb-2 ">Total Credit Hour:{totalCost} </h3>
        <hr className="border-neutral-400" />
      </div>
    </>
  );
};

export default Course;
