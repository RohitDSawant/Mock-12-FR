import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";

const user = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [login_data, setlogin_data] = useState(user);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setlogin_data({ ...login_data, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://mybasket.onrender.com/login", login_data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Input
          name="email"
          onChange={handleInput}
          placeholder="Enter email ID"
          type={"email"}
        />
        <Input
          name="password"
          onChange={handleInput}
          placeholder="Enter password"
          type={"password"}
        />
        <Input id="submit-btn" type={"submit"} />
      </form>
    </div>
  );
};

export default LoginPage;
