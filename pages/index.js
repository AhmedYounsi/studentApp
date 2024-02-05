import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Slider from "../components/Slider";
import axios from "axios";
import AddStudent from "../components/addStudent";

function Home() {
  const [student, setstudent] = useState([]);
  const [studentLenght, setstudentLenght] = useState(0);

  useEffect(() => {
    AOS.init();
    getStudent();
  }, []);

  const getStudent = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/getAllStudents"
    );
    setstudent(response.data.reverse());
    setstudentLenght(response.data.length);
  };
  const deleteStudent = async (item) => {
    const res = await axios.post(
      "http://localhost:5000/api/deleteStudent",
      item
    );
    if (res.status === 200) {
      getStudent();
    }
  };

  const handleChildClick = async (dataFromChild) => {
    const res = await axios.post(
      "http://localhost:5000/api/addStudent",
      dataFromChild
    );
    if (res.status === 200) {
      getStudent();
    }
  };

  return (
    <div className="_Home">
      <Head>
        <title>Student API</title>
      </Head>
      <Slider student={student} />
      <AddStudent onChildClick={handleChildClick} />

      <section className="student-list container">
        <div className="section-header">
          <span>Students List</span>
          <h2>Students List</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Grade</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {student.map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>{item.grade}</td>
                <td>
                  <button
                    onClick={() => deleteStudent(item)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {student.length === 0 && (
          <div className="col-12 no-data-message">No student to display</div>
        )}
      </section>
    </div>
  );
}

export default Home;
