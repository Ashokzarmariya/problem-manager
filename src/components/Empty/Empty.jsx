import React from "react";
import {useNavigate} from "react-router-dom"

const Empty = () => {
    const navigate=useNavigate()
  return (

      <div className="relative ">
        <h1 className="text-center mt-52 text-6xl">No Data</h1>
          <div className="flex justify-center mt-10">
              <button onClick={()=> navigate("/")} className="btn btn-primary ">Add Problem</button>
      </div>
          
       
      </div>
  
  );
};

export default Empty;
