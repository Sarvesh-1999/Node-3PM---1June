import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckEmail from "./pages/CheckEmail";
import VerifyEmail from "./pages/VerifyEmail";
import HomePage from "./pages/HomePage";
import axios from "axios";

const App = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:9000/api/v1/logout", {} , {
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
      })

      localStorage.removeItem("token")
      alert("logout successful✅")
      navigate("/")
      
    } catch (error) {
      console.log(error.response.message);
      alert(error.response.message)
    }
  }

  return (
    <>
   
        <nav>
          {token ? <button onClick={handleLogout}>Logout</button> : <>
          
          <Link to={"/"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          
          </>}

         
          <hr />
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
    </>
  );
};

export default App;
