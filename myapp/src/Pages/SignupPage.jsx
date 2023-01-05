import { Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const user = {
  username: "",
  email: "",
  password: "",
};

const SignupPage = () => {
  const [signup_data, setSignUp_data] = useState(user);

  // catching input values ==>

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignUp_data({ ...signup_data, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    
     axios
      .post("https://mybasket.onrender.com/signup", signup_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter username"
          name="username"
          onChange={handleInput}
          type={"text"}
        />
        <Input
          placeholder="Enter email ID "
          name="email"
          onChange={handleInput}
          type={"email"}
        />
        <Input
          placeholder="Enter password"
          name="password"
          onChange={handleInput}
          type={"password"}
        />
        <Input id="submit-btn" type={"submit"} />
      </form>
    </div>
  );
};

export default SignupPage;
