import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token);
  

  useEffect(() => {
    async function getEmailVerification() {
      try {
        await axios.post("http://localhost:9000/api/v1/verify", {},{
          headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        alert(error.response.data.message);
      }
    }

    getEmailVerification();
  }, []);

  return <div>VerifyEmail</div>;
};

export default VerifyEmail;
