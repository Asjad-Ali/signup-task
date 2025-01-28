// import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />

        <div className="clearfix">
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
