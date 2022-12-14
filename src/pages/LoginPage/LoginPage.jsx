import React, { useState } from "react";
import Loading from "../../components/LoadingPage/Loading";
import LoginForm from "../../components/form/LoginForm";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email: values.email,
      password: values.password,
    };

    console.log(loginData);

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
      />
    </>
  );
};

export default LoginPage;
