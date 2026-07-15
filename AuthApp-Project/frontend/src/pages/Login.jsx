import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = { email, password };
    console.log(loginUser);

    try {
      let resp = await axios.post(
        "http://localhost:9000/api/v1/login",
        loginUser,
      );
      console.log(resp);

      if (resp.data.success) {
        alert(resp.data.message);
        localStorage.setItem("token", resp.data.token);
        navigate("/home")
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          id="email"
          required
          value={email}
          onChange={handleEmail}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="******"
          id="password"
          required
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
