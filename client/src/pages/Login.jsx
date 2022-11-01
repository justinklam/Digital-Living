import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
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
      await axios.post("http://localhost:8080/api/auth/login", inputs, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Login</button>
          {error && <p>Error: {error}</p>}
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
