import React, { useState } from "react";
import SignUpForm from "../../components/form/SignUpForm";
import { useNavigate  } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    const registerData = {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      confirmPassword: values.password2,
      gender: "female"
    };

    try {
      const response = await fetch("http://localhost:4000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(registerData)
      })
      const user = await response.json()
      if (user.status) {
        alert("Account created")
        navigate("/login")
        setIsLoading(false)
      } else {
        throw new Error(user.message)
      }

    } catch (error) {
      alert(error.message)
        setIsLoading(false)
    }

    

    setValues({
      email: "",
      fullname: "",
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
        isLoading={isLoading}
      />
    </>
  );
};

export default RegisterPage;
