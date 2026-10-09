
import { Component } from "react";
import StudentDetails from "./StudentDetails";

class StudentDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: "",
      selectedStudent: null,
      showDetails: false,
      elapsedSeconds: 0,
      students: [
        { id: 1, name: "Rahul", course: "React", status: "Active" },
        { id: 2, name: "Priya", course: "Angular", status: "Active" },
        { id: 3, name: "Amit", course: "JavaScript", status: "Inactive" },
        { id: 4, name: "Sakshi", course: "React", status: "Active" }
      ]
    };

    this.timer = null;

    console.log("StudentDashboard constructor executed");
  }

  componentDidMount() {
    console.log("StudentDashboard mounted successfully.");

    this.setState({
      welcomeMessage: "Welcome to the Student Management System!"
    });

    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedSeconds: prevState.elapsedSeconds + 1
      }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("StudentDashboard updated");

    if (prevState.students !== this.state.students) {
      console.log("Previous students:", prevState.students);
      console.log("Current students:", this.state.students);
    }

    if (prevState.selectedStudent !== this.state.selectedStudent) {
      console.log("Previous selected student:", prevState.selectedStudent);
      console.log("Current selected student:", this.state.selectedStudent);
    }
  }

  componentWillUnmount() {
    console.log("StudentDashboard will unmount");

    clearInterval(this.timer);
  }

  viewDetails = (student) => {
    console.log("Selected student:", student);

    this.setState({
      selectedStudent: student,
      showDetails: true
    });
  };

  hideDetails = () => {
    this.setState({
      showDetails: false
    });
  };

  changeCourse = (id) => {
    this.setState((prevState) => {
      const updatedStudents = prevState.students.map((student) => {
        if (student.id === id) {
          const updatedCourse =
            student.course === "React" ? "Angular" : "React";

          console.log("Student:", student.name);
          console.log("Previous course:", student.course);
          console.log("Updated course:", updatedCourse);

          return {
            ...student,
            course: updatedCourse
          };
        }

        return student;
      });

      const updatedStudent = updatedStudents.find(
        (student) => student.id === id
      );

      return {
        students: updatedStudents,
        selectedStudent:
          prevState.selectedStudent?.id === id
            ? updatedStudent
            : prevState.selectedStudent
      };
    });
  };

  render() {
    const {
      students,
      welcomeMessage,
      selectedStudent,
      showDetails,
      elapsedSeconds
    } = this.state;

    console.log("StudentDashboard render executed");

    return (
      <div className="dashboard">
        <h1>Student Management System</h1>

        {welcomeMessage && (
          <p className="welcome-message">{welcomeMessage}</p>
        )}

        <h3>Dashboard Active For: {elapsedSeconds} seconds</h3>

        <div className="summary-card">
          <h3>Total Students: {students.length}</h3>
        </div>

        <h2>Student List</h2>

        <div className="student-grid">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>
              <p>ID: {student.id}</p>
              <p>Course: {student.course}</p>
              <p>Status: {student.status}</p>

              <button onClick={() => this.viewDetails(student)}>
                View Details
              </button>

              <button onClick={() => this.changeCourse(student.id)}>
                Change Course
              </button>
            </div>
          ))}
        </div>

        <div className="details-section">
          <button onClick={() => this.setState({ showDetails: true })}>
            Show Student Details
          </button>

          <button onClick={this.hideDetails}>
            Hide Student Details
          </button>

          {showDetails && (
            <StudentDetails student={selectedStudent} />
          )}
        </div>
      </div>
    );
  }
}

export default StudentDashboard;