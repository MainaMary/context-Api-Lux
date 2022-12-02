import React from "react";
import { useContext } from "react";
import { ApiContext } from "./apiContext";

const Users = () => {
  const { userObj } = useContext(ApiContext); //consume data
  return (
    <div>
      <h2>Name:{userObj.name}</h2>
      <h2>Password: {userObj.passoword}</h2>
    </div>
  );
};

export default Users;
