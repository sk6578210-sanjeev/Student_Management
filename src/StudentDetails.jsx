
import { Component } from "react";

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    console.log("StudentDetails constructor executed");
  }

  componentDidMount() {
    console.log("StudentDetails mounted");
  }

  componentDidUpdate(prevProps) {
    console.log("StudentDetails updated");
    console.log("Previous student:", prevProps.student);
    console.log("Current student:", this.props.student);
  }

  componentWillUnmount() {
    console.log("StudentDetails will unmount");
  }

  render() {
    const { student } = this.props;

    console.log("StudentDetails render executed");

    if (!student) {
      return (
        <div>
          <h2>Student Details</h2>
          <p>Please select a student to view details.</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Student Details</h2>
        <p>ID: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>
        <p>Status: {student.status}</p>
      </div>
    );
  }
}

export default StudentDetails;