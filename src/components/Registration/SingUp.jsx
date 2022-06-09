import React, { useState } from "react";
import LoginCard from "./LoginCard";

const SingUp = ({ handleCard }) => {
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
      let headers = new Headers();

      headers.append("Content-Type", "application/json");

      let data = {
        email: user.email,
        password: user.password,
        username: "ashok3",
      };

      const res = await fetch(
        "https://problem-manager.herokuapp.com/register",
        {
          mode: "cors",
          method: "POST",
          headers: headers,
          body: JSON.stringify(data),
        }
      );
      const data1 = await res.json();
      console.log(data1)
      data1.message ? setErr(data1.message) : setErr(null);
      

      localStorage.setItem("jwt token", `Bearer ${data1.token}`);
    } catch (error) {
      setErr(error.message);
      console.log("catch", error.message);
    }
    console.log("err", err);

    
  };
!err && window.location.reload();
  return (
    <div className="">
      
      <div>
        <LoginCard
        handleChange={handleChange}
        handleSumbit={handleSubmit}
        register={"Sing Up"}
        handleCard={handleCard}
        />
        
      </div>
      <div className="pl-10 pr-10 ">
        <h1 className={err!=="true"? "text-center p-4 text-red-600" :""}>{ err!=="true"?err:""}</h1>
      </div>
      
    </div>
  );
};

export default SingUp;
