import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let uid = JSON.parse(sessionStorage.getItem("uid"));
  let type = JSON.parse(sessionStorage.getItem("type"));

  return uid !== null && type !== null && type === "customers" ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
