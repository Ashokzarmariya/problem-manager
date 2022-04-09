import React, { useEffect, useState } from "react";

import AuthContext from "./AuthContext";

const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt token");

  useEffect(() => {
    async function fecthData() {
      let headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      headers.append("authorization", token);

      const res = await fetch(
        `https://problem-manager.herokuapp.com/users/get`,
        {
          mode: "cors",
          method: "GET",
          headers: headers,
        }
      );
      const data = await res.json();
      setUser(!data.message?data:null);
    }

    fecthData();
    console.log("context", user);
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthState;
