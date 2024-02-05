import React, { useState } from "react";

function AddStudent(props) {
  const initialFormData = {
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    department: "",
    grade: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle change for the select input
  const handleDepartmentChange = (e) => {
    setFormData({
      ...formData,
      department: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    props.onChildClick(formData);
  };
  return (
    <section className="student-add container">
      <div className="section-header">
        <span>Add Student</span>
        <h2>Add Student</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-6">
            First name:
            <input
              name="first_name"
              className="form-control"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>

          <label className="col-6">
            Last name:
            <input
              name="last_name"
              className="form-control"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="row mb-3">
          <label className="col-6">
            Email:
            <input
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="col-6">
            Departement:
            <select
              className="form-select"
              name="department"
              value={formData.department}
              onChange={handleDepartmentChange}
            >
              <option value=""></option>
              <option value="Science and Mathematics">
                Science and Mathematics
              </option>
              <option value="Social Sciences"> Social Sciences</option>
              <option value="Arts and Creative Studies">
                Arts and Creative Studies
              </option>
              <option value="Physical Education and Sports">
                Physical Education and Sports
              </option>
            </select>
          </label>
        </div>

        <div className="row">
          <label className="col-6">
            Grade:
            <input
              name="grade"
              className="form-control"
              value={formData.grade}
              onChange={handleChange}
              type="number"
              max="5"
            />
          </label>

          <label className="col-6">
            Age:
            <input
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              type="date"
            />
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default AddStudent;
