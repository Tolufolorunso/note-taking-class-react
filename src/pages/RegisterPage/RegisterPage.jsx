import React, { useState } from "react";
import SignUpForm from "../../components/form/SignUpForm";

const RegisterPage = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      password2: values.password2,
    };

    console.log(registerData);

    setValues({
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <>
      <SignUpForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </>
  );
};

export default RegisterPage;
