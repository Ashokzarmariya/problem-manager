import React, { useContext, useState } from "react";
import AuthContext from "../../contex/AuthContext";

import FormCard from "./FormCard";

const AddProblems = () => {
  const user = useContext(AuthContext);

  const [problem, setProblem] = useState({
    link: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setProblem({ ...problem, [name]: e.target.value });
  };
  const problemData = {
    title: problem.title,
    link: problem.link,
    description: problem.discription,
    userId: user ? user._id : "",
    difficulty: problem.difficulty.toLowerCase(),
  };

  const addData = async (e) => {
    e.preventDefault();
    console.log("user", user);
    let headers = new Headers();
    const token = localStorage.getItem("jwt token");
    console.log(token);
    console.log("user", user);
    console.log("params", problem.difficulty.toLowerCase());

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("authorization", token);

    await fetch(
      `https://problem-manager.herokuapp.com/problems/add/${problem.difficulty.toLowerCase()}`,
      {
        mode: "cors",
        method: "POST",
        headers: headers,
        body: JSON.stringify(problemData),
      }
    );
    console.log(problem);
  };

  return (
    <div className="pt-10 min-w-fit p-10">
      <div className="border rounded-lg ">
        <FormCard handleChange={handleChange} handleSubmit={addData} />
      </div>
    </div>
  );
};

export default AddProblems;
