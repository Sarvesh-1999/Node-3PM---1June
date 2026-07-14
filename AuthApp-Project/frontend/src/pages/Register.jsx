import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    try {
      let resp = await axios.post(
        "http://localhost:9000/api/v1/register",
        newUser,
      );
      console.log(resp);
      if (resp.data.success) {
        // localStorage.setItem("token" , resp.data.token)
        //! NAVIGATE TO A MSG PAGE -> CHECK YOUR EMAIL AND VERIFY YOURSELF
        navigate("/check-email")
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <h3>Register Yourself</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="John Doe"
          id="username"
          required
          value={username}
          onChange={handleUsername}
        />
        <br />
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
