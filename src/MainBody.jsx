import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";

class MainBody extends React.Component {
  render() {
    const totalLecture = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>In this course, we will learn react js by bulding TaskOpedia!</p>
        <p>Total Lecture - {totalLecture}</p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student
          experience={2}
          name="Kris Walley"
          headshot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Student>

        <Student
          experience={5}
          name="Jassie Pinkman"
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={1}
          name="Walter White"
          headshot="https://api.lorem.space/image/face?w=150&h=152"
        />
        <Student
          experience={3}
          name="Lito Macias"
          headshot="https://api.lorem.space/image/face?w=150&h=153"
        />
      </div>
    );
  }
}
export default MainBody;
