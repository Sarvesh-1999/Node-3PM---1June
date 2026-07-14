import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckEmail from "./pages/CheckEmail";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          <hr />
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
