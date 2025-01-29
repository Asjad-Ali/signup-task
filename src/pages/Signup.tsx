import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { signupUser } from "../store/authStore";
import SignupSuccess from "../components/SignupSuccess"; // Adjust the path if needed
import logo from "../assets/images/logo.webp";
import Loader from "../components/Loader"; // Import the loader component

import "../assets/css/signup.css";

function Signup() {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    user_type: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupUser(formData));
  };

  return (
    <>
      {!authState.success ? (
        <div className="container">
          <div className="card">
            <img src={logo} alt="logo" />
            <div className="clearfix">
              {authState.loading && <Loader />}
              {authState.error && (
                <p style={{ color: "red" }}>{authState.error}</p>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">
                <b>First Name:</b>
              </label>
              <input
                type="text"
                placeholder="Enter User Type"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <label htmlFor="last_name">
                <b>Last Name:</b>
              </label>
              <input
                type="text"
                placeholder="Enter User Type"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />

              <label htmlFor="username">
                <b>Username:</b>
              </label>
              <input
                type="text"
                placeholder="Enter User Type"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label htmlFor="cars">
                <b>User Type:</b>
              </label>
              <select
                onChange={handleChange}
                required
                name="user_type"
                id="user_type"
              >
                <option value="">Select One</option>
                <option value="researcher">Researcher</option>
                <option value="investor">Investor</option>
                <option value="institution_staff">Institution Staff</option>
                <option value="service_provider">Service Provider</option>
              </select>

              <label htmlFor="email">
                <b>Email:</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="country">
                <b>Country:</b>
              </label>
              <input
                type="text"
                placeholder="Enter Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />

              <label htmlFor="password">
                <b>Password:</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <div className="clearfix">
                <button type="submit" className="signupbtn">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <SignupSuccess authState={authState} />
        </div>
      )}
    </>
  );
}

export default Signup;
