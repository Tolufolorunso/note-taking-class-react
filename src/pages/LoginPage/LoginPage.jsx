import React, { useEffect, useState } from "react";
import LoginForm from "../../components/form/LoginForm";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";
import { useNavigate  } from "react-router-dom";
import { useAppContext } from "../../store/appContext";
import Toast from "../../components/Toast";


const LoginPage = () => {
  const navigate = useNavigate()

  const { isLoading, login, token } = useAppContext()
  

  useEffect(() => {
  if (token) {
    return navigate('/')
  }
  },[token])


  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  

  

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: values.email,
      password: values.password,
    };

    const isLoginSuccessful = await login(loginData)
    if (isLoginSuccessful) {
      navigate('/')
    }

    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Toast />
      
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
