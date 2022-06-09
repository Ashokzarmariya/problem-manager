import React, { useContext, useState } from "react";
import AuthContext from "../../contex/AuthContext";

import FormCard from "./FormCard";

const AddProblems = () => {
  const user = useContext(AuthContext);
  const [notification, setNotification] = useState("");
  const [isAdd, setIsAdd] = useState(true);

  const [problem, setProblem] = useState({
    link: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setProblem({ ...problem, [name]: e.target.value });
  };
  const problemData = {
    link: problem.link,
    userId: user ? user._id : "",
    difficulty: problem.difficulty.toLowerCase(),
  };

  const addData = async (e) => {
    e.preventDefault();

    let headers = new Headers();
    const token = localStorage.getItem("jwt token");

    console.log("problemData", problemData);

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("authorization", token);

    try {
      const dataSent=await fetch(
        `https://problem-manager.herokuapp.com/problems/add/${problem.difficulty.toLowerCase()}`,
        {
          mode: "cors",
          method: "POST",
          headers: headers,
          body: JSON.stringify(problemData),
        }
      );
      const data = await dataSent.json();
      data.message?setNotification("Problem Is Already Exist"):setNotification("Problem Add Successfuly")
      data.message ? setIsAdd(false) : setIsAdd(true)
      
      console.log("problem Add Successfuly",data)
    } catch (error) {
      console.log("problem is alredy exist");
    }

    
  };

  return (
    <div className="pt-10 min-w-fit p-10">
      <div className="border rounded-lg ">
        <FormCard handleChange={handleChange} handleSubmit={addData} />
      </div>

      <h1 className={isAdd?"text-green-700 mt-5 text-center text-3xl font-semibold":"text-red-600 mt-5 text-center text-3xl font-semibold"}>{ notification}</h1>
    </div>
  );
};

export default AddProblems;
