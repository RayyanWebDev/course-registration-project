# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Course Registration System README

## Table of Contents

- ### Introduction
- ### Project Features
  - #### Content of the Project:
  - #### API:
  - #### Image hosting:
  - #### Tailwind as CSS:
  - #### User Interaction:
- ### State
  - #### What is State in React?
  - #### Major difference between Props and State:
  - #### Managing the State of the present assignment project:

## Introduction:

Welcome to my “Course Registration” project!
This README provides an overview of some major features of this project, in addition to that discusses how state is used here.

## Features

### Projects Features

- #### Content of the Project:

  The project is about building a webpage using react.js to register on a diverse range of programming courses, covering various languages and frameworks. Each card possess an <img> tag, the course title in a <h3> tag, the course detail, credit and price in a <p> tag, last but not the least a “Select” <button>.

- #### API:

  The JSON data in the project represents an array of course related objects.
  There are 6 specified properties, namely:

  - “id”

  - “img”

  - “courseName”

  - “details”

  - “price”

  - “credits”

  It includes 9 data giving each card a unique sets of id.

- #### Image hosting:

  There are 9 images which are hosted in https://imgbb.com/ website. The URL generated by this website is added in to the JSON data.

- #### Tailwind as CSS:

  The CSS framework that’s been used in this project is Tailwind.

- #### User Interaction:

  The Users can select the course they want to enroll in by simply clicking the Select button and the selected course will appear in the Course Name Section. The speciality of this project is one can select up to 20 hour credits items. If the remaining credit is 0, a toast will be shown saying no more credits available.

## State

- ### What is State in React?

In simple terms, the “State” in React is defined as an object, which stores some data or information of the component that may change over the lifespan of the component.

- ### Major difference between Props and State:

We know that Props are also objects that hold information to control some behavior of that particular component, which seems pretty similar to what State does. But the main difference between Props State is one cannot be changed and the other one changes over time. The State is used to store some data of a particular component, so that it can be changed when needed, where else Props are immutable in a sense that once set it cannot be updated.

- ### Managing the State of the present assignment project:

  - ### Initializing of State Variables:

    - #### allCourses:

      This state variable stores the courses’ data. Initially, it’s an empty array.

      ````javascript
      const [allCourses, setAllCourses] = useState([]);```

      ````

    - #### selectedCourses:

      This state variable is used to update the data by using the spread operator as the State in react cannot be mutated directly, since it’s a bad practice. Not just that the component will not be re-rendered.

      ````javascript
      const [selectedCourses, setSelectedCourses] = useState([]);```

      ````

    - #### remaining:

      It stored the data of totalRemaining where the initial value is zero.

      ````javascript
      const [remaining, setRemaining] = useState(0);```

      ````

    - #### totalCost:

      This variable stored the data of totalCount where the initial value is also zero.

      ````javascript
      const [totalCost, setTotalCost] = useState(0);```
      ````

  - ### Conditional Rendering:

  If there is similar item in selectedCourses, it renders with the message “This course already exists”.

  ````javascript
     let totalCount = course.credits;
  if (isExist) {
   alert("This course already exists");
  } else {
   selectedCourses.forEach((item) => {
     totalCount += item.credits;
   });```
  ````

## Conclusion

This README file just give an overall feature of the Github project.
