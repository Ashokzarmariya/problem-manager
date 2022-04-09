import React, { useState } from "react";
import LoginCard from "./LoginCard";

const SingIn = ({ handleCard }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("true");

  const handleChange = (e) => {
    const { name } = e.target;

    setUser({ ...user, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email: user.email,
        password: user.password,
      };

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      const res = await fetch("https://problem-manager.herokuapp.com/login", {
        mode: "cors",
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const data1 = await res.json();

      localStorage.setItem("jwt token", `Bearer ${data1.token}`);

      data1.message ? setErr(data1.message) : setErr(null);
    } catch (error) {
      setErr(error.message);
      console.log(error.message);
    }
  };

  console.log("err", err);
  !err && window.location.reload();

  return (
    <div>
      <LoginCard
        handleChange={handleChange}
        handleSumbit={handleSubmit}
        register={"Login"}
        handleCard={handleCard}
      />
    </div>
  );
};

export default SingIn;
