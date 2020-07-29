import React, { useState } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",  
    phone: "",
    caddress: "",
    paddress: "",
    course: "",
    college: "",
    year: "",
    cgpa: "",
    cname: "",
    desig: "",
    doj: "",
    dor: "",
    lprofile: "",
    fprofile: "",
    hobby: "",
    gprofile: ""


  });

  const { fname, lname, email, phone, caddress, paddress,course, college, year, cgpa,
  cname, desig, doj, dor, fprofile, lprofile, hobby, gprofile
  } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Employee</h2>
        <form onSubmit={e => onSubmit(e)}>

        
          <div className="form-group">
          <h3>Personal Details</h3>
          <hr></hr>
          <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="fname"
              value={fname}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LastName"
              name="lname"
              value={lname}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>

          
          <div className="form-group">
          <div className="row">
          <div className="col-6">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>

          <div className="form-group">
          <div className="row">
          <div className="col-6">
            <input
              type="address"
              className="form-control form-control-lg"
              placeholder="Enter Your Current Address"
              name="caddress"
              value={caddress}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Permanent Address"
              name="paddress"
              value={paddress}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>

          


          <div className="form-group">
          <h3>Educational Details</h3>
          <hr></hr>
          <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Course"
              name="course"
              value={course}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your College/University"
              name="college"
              value={college}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>

          <div className="form-group">
          <div className="row">
          <div className="col-6">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Year"
              name="year"
              value={year}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Percentage/CGPA"
              name="cgpa"
              value={cgpa}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>


          <div className="form-group">
          <h3>Professional Details</h3>
          <hr></hr>
          <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Company Name"
              name="cname"
              value={cname}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Designation"
              name="desig"
              value={desig}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>

          <div className="form-group">
          <div className="row">
          <div className="col-6">
          <b>From Date</b>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter date of joining"
              name="doj"
              value={doj}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
          <b>To Date</b>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder=""
              name="dor"
              value={dor}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>



          <div className="form-group">
          <h3>Social Media and Hobbies</h3>
          <hr></hr>
          <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="LinkedIn Profile"
              name="lprofile"
              value={lprofile}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Facebook Profile"
              name="fprofile"
              value={fprofile}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>

          <div className="form-group">
          <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="GitHub Profile"
              name="gprofile"
              value={gprofile}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="col-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Hobbies"
              name="hobby"
              value={hobby}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          </div>





          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;