import React, { useState } from "react";
import LoginForm from "../../components/form/LoginForm";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";
import { useNavigate  } from "react-router-dom";


const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isLoading,setIsLoading] = useState()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setIsLoading(true)
    const loginData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch("http://localhost:4000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(loginData)
      })
      const result =await response.json()
      if (result.status) {
        alert(result.message)
        localStorage.setItem("token", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))
        navigate("/")
        setIsLoading(false)
      } else {
        throw new Error(user.message)
      }
    } catch (error) {
      console.log(error)
setIsLoading(false)

    }

    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        isLoading={isLoading}
      />
    </>
  );
};

export default LoginPage;
