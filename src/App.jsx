
import { Component } from "react";
import StudentDashboard from "./StudentDashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <StudentDashboard />
      </div>
    );
  }
}

export default App;