import React, { useState } from "react";
import SignUpForm from "../../components/form/SignUpForm";
import { useNavigate  } from "react-router-dom";
import { useAppContext } from "../../store/appContext";
import Toast from "../../components/Toast";

const RegisterPage = () => {
  const { isLoading, register } = useAppContext()
 
  const navigate = useNavigate()
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      confirmPassword: values.password2,
      gender: "female"
    };

    register(registerData)   

    // setValues({
    //   email: "",
    //   fullname: "",
    //   password: "",
    //   password2: "",
    // });
  };

  return (
    <>
      <Toast />
      <SignUpForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        isLoading={isLoading}
      />
    </>
  );
};

export default RegisterPage;
