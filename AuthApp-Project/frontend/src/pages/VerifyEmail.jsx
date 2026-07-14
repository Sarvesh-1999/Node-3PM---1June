import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return <div>VerifyEmail</div>;
};

export default VerifyEmail;
