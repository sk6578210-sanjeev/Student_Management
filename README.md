# Student Management System

## About the Project

The Student Management System is a React application built using **class components**. It allows users to view student information, select students to see their details, and change student courses.

This project is created to understand React class components, state management, props, conditional rendering, event handling, and component lifecycle methods.

## Features

* Display a list of students with ID, name, course, and status.
* Show the total number of students.
* Display a welcome message when the dashboard loads.
* View individual student details.
* Show and hide the student details section.
* Change a student's course dynamically.
* Display a timer showing how long the dashboard has been active.
* Understand component lifecycle methods through console logs.
* Apply CSS styling for a responsive user interface.

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS

## Project Structure


student-management-system/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── StudentDashboard.jsx
│   ├── StudentDetails.jsx
│   └── main.jsx
├── package.json
└── README.md


*The structure may vary slightly depending on your project setup.*

## React Concepts Covered

### 1. Class Components

Used to create the `StudentDashboard` and `StudentDetails` components.

### 2. State Management

Used to store student information, the selected student, the welcome message, the visibility of student details, and the timer value.

### 3. Props

Passes the selected student's information from `StudentDashboard` to `StudentDetails`.

### 4. Event Handling

Uses `onClick` to handle actions such as viewing details, changing courses, and showing or hiding student details.

### 5. List Rendering

Uses the `map()` method to display the list of students.

### 6. Conditional Rendering

Displays the welcome message and student details based on the current state.

### 7. Lifecycle Methods

Demonstrates:

* `constructor()`
* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount()`
* `render()`

### 8. Timer Management

Uses `setInterval()` to update the elapsed time and `clearInterval()` to clean up the timer when the dashboard is unmounted.

## Installation and Setup

### Prerequisites

* Node.js
* npm
* A code editor such as Visual Studio Code

### Steps to Run the Project

1. Clone the repository:

   git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project folder:

   cd student-management-system

3. Install the dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local URL displayed in your terminal.

## Learning Objective

The main objective of this project is to gain practical experience with React class components and understand how state, props, event handling, conditional rendering, and lifecycle methods work together in a React application.
