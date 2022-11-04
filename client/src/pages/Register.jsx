import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
      console.log("Register:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Register</button>
          {error && <p>Error: Username or Email is in use!</p>}
          <span>
            Do you have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
